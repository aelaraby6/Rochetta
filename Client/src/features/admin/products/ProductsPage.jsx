import { useState } from "react";
import {
  Package,
  Trash2,
  Edit,
  Eye,
  PlusCircle,
  Search,
  Filter,
} from "lucide-react";
import DynamicTable from "../components/DynamicTable";
import { useDebounce } from "../../../hooks/useDebounce";
import {
  useGetProductsQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} from "../../products/api/productsApi";
import { useGetCategoriesQuery } from "../categories/api/categoriesApi";
import toast from "react-hot-toast";
import ProductActionModal from "./components/ProductActionModal";
import ProductDetailsModal from "./components/ProductDetailsModal";

export default function ProductsPage() {
  const [page, setPage] = useState(1);
  const limit = 10;
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const [isActionModalOpen, setIsActionModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [detailsProductId, setDetailsProductId] = useState(null);

  const { data: categoriesData } = useGetCategoriesQuery({ limit: 100 });
  const categories = categoriesData?.data || [];

  const { data, isLoading } = useGetProductsQuery({
    page,
    limit,
    search: debouncedSearch,
    categoryName: categoryFilter, 
    is_active: statusFilter,
  });
  
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const productsData = data?.data || [];
  const pagination = data?.pagination || { totalPages: 1 };

  const handleToggleStatus = async (row) => {
    try {
      const formData = new FormData();
      formData.append("is_active", !row.is_active);

      await updateProduct({ id: row._id, data: formData }).unwrap();
      toast.success("Product status updated");
    } catch (error) {
      toast.error(error?.data?.message || "Failed to update status");
    }
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id).unwrap();
        toast.success("Product deleted successfully");
      } catch (error) {
        toast.error(error?.data?.message || "Failed to delete product");
      }
    }
  };

  const openEditModal = (row, e) => {
    e.stopPropagation();
    setProductToEdit(row);
    setIsActionModalOpen(true);
  };

  const openDetailsModal = (id) => {
    setDetailsProductId(id);
    setIsDetailsModalOpen(true);
  };

  const handleCloseActionModal = () => {
    setIsActionModalOpen(false);
    setProductToEdit(null);
  };

  const columns = [
    {
      key: "product",
      label: "Product",
      render: (_, row) => (
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-hidden shrink-0 border border-gray-200 dark:border-gray-700">
            {row.image ? (
              <img
                src={row.image}
                alt={row.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <Package className="w-full h-full p-2 text-gray-400" />
            )}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900 dark:text-white line-clamp-1">
              {row.name}
            </span>
            <span className="text-xs text-gray-500">
              {row.category?.name || "No Category"}
            </span>
          </div>
        </div>
      ),
    },
    {
      key: "price",
      label: "Price",
      render: (val) => (
        <span className="font-medium text-gray-900 dark:text-gray-100">
          {val} EGP
        </span>
      ),
    },
    {
      key: "stock",
      label: "Stock",
      render: (val, row) => {
        let displayStock = `${val} items`;
        const hasStrips = row.has_strips || row.stripsPerBox > 0;
        const stripsPerBox =
          row.strips_per_box || row.strip_count || row.stripsPerBox || 1;

        if (hasStrips && stripsPerBox > 0) {
          const boxes = Math.floor(val / stripsPerBox);
          const remainingStrips = val % stripsPerBox;
          displayStock =
            remainingStrips > 0
              ? `${boxes} Bx & ${remainingStrips} Str`
              : `${boxes} Bx`;
        }

        return (
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
              val > 10
                ? "bg-green-50 text-green-700"
                : val > 0
                  ? "bg-orange-50 text-orange-700"
                  : "bg-red-50 text-red-700"
            }`}
          >
            {val > 0 ? displayStock : "Out of stock"}
          </span>
        );
      },
    },
    {
      key: "is_active",
      label: "Status",
      align: "center",
      render: (val, row) => (
        <div onClick={(e) => e.stopPropagation()}>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={val}
              onChange={() => handleToggleStatus(row)}
            />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
          </label>
        </div>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      align: "right",
      render: (_, row) => (
        <div className="flex items-center justify-end gap-1">
          <button
            onClick={() => openDetailsModal(row._id)}
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
            title="View Details"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => openEditModal(row, e)}
            className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition-colors"
            title="Edit Product"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => handleDelete(row._id, e)}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
            title="Delete Product"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Products Management
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage your inventory, prices, and product details.
          </p>
        </div>
        <button
          onClick={() => {
            setProductToEdit(null);
            setIsActionModalOpen(true);
          }}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#288657] hover:bg-green-700 text-white font-semibold rounded-xl shadow-sm transition-colors shrink-0"
        >
          <PlusCircle className="w-5 h-5" />
          Add Product
        </button>
      </div>

      <div className="bg-white dark:bg-[#1e1e1e] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(1);
            }}
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#252525] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#165938] outline-none transition-all"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-48">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#252525] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#165938] outline-none transition-all cursor-pointer appearance-none"
            >
              <option value="">All Categories</option>
              {categories?.map((cat) => (
                <option key={cat._id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="relative flex-1 md:w-40">
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setPage(1);
              }}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#252525] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#165938] outline-none transition-all cursor-pointer appearance-none"
            >
              <option value="">All Status</option>
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      <DynamicTable
        columns={columns}
        data={productsData}
        rowKey="_id"
        isLoading={isLoading}
        currentPage={page}
        totalPages={pagination.totalPages}
        onPageChange={setPage}
        emptyMessage="No products found."
        emptyIcon={Package}
        onRowClick={(row) => openDetailsModal(row._id)}
      />

      <ProductActionModal
        isOpen={isActionModalOpen}
        onClose={handleCloseActionModal}
        productToEdit={productToEdit}
      />

      <ProductDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        productId={detailsProductId}
      />
    </div>
  );
}
