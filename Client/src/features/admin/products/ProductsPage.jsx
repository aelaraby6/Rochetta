import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Package,
  PlusCircle,
  Pencil,
  Trash2,
  Loader2,
  Search,
  ShieldAlert,
} from "lucide-react";
import toast from "react-hot-toast";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "../../products/store/productsApi";
import DynamicTable from "../components/DynamicTable";

const ITEMS_PER_PAGE = 10;

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const [searchTerm, setSearchTerm] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  const {
    data: response,
    isLoading,
    isFetching,
  } = useGetProductsQuery({
    page: currentPage,
    limit: ITEMS_PER_PAGE,
    search: searchTerm || undefined,
  });

  const [deleteProduct] = useDeleteProductMutation();

  const products = response?.data || [];
  const totalPages = response?.totalPages || 1;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setSearchParams({ page: page.toString() });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete "${name}"?`)) return;
    setDeletingId(id);
    try {
      await deleteProduct(id).unwrap();
      toast.success("Product deleted successfully");
    } catch (err) {
      toast.error(err.data?.message || "Failed to delete product");
    } finally {
      setDeletingId(null);
    }
  };

  const columns = [
    {
      key: "image",
      label: "Image",
      render: (value, row) => (
        <img
          src={value || "/placeholder.png"}
          alt={row.name}
          className="w-10 h-10 rounded-lg object-cover bg-gray-100 dark:bg-gray-800"
        />
      ),
    },
    {
      key: "name",
      label: "Product Name",
      render: (value) => (
        <span className="font-semibold text-gray-900 dark:text-white">
          {value}
        </span>
      ),
    },
    {
      key: "category",
      label: "Category",
      render: (value) => (
        <span className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
          {value?.name || "—"}
        </span>
      ),
    },
    {
      key: "price",
      label: "Price",
      align: "right",
      render: (value) => (
        <span className="font-bold text-gray-900 dark:text-white">
          ${Number(value).toFixed(2)}
        </span>
      ),
    },
    {
      key: "stock",
      label: "Stock",
      align: "center",
      render: (value) => {
        const stock = value ?? 0;
        let color = "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
        if (stock <= 0) color = "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
        else if (stock < 10) color = "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
        return (
          <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-bold ${color}`}>
            {stock}
          </span>
        );
      },
    },
    {
      key: "requires_prescription",
      label: "Rx",
      align: "center",
      render: (value) =>
        value ? (
          <ShieldAlert className="w-4 h-4 text-red-500 mx-auto" />
        ) : (
          <span className="text-gray-400">—</span>
        ),
    },
    {
      key: "_id",
      label: "Actions",
      align: "center",
      render: (id, row) => (
        <div className="flex items-center justify-center gap-1">
          <Link
            to={`/dashboard/products/edit/${id}`}
            className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            aria-label={`Edit ${row.name}`}
          >
            <Pencil className="w-4 h-4" />
          </Link>
          <button
            onClick={() => handleDelete(id, row.name)}
            disabled={deletingId === id}
            className="p-2 rounded-lg text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-50"
            aria-label={`Delete ${row.name}`}
          >
            {deletingId === id ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Trash2 className="w-4 h-4" />
            )}
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      {/* ─── Page Header ─── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Products
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage your product catalog
          </p>
        </div>
        <Link
          to="/dashboard/products/add"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-sm transition-colors shrink-0"
        >
          <PlusCircle className="w-5 h-5" />
          Add Product
        </Link>
      </div>

      {/* ─── Search Bar ─── */}
      <div className="relative mb-6 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setSearchParams({ page: "1" });
          }}
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1e1e1e] text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-green-500 outline-none transition-all"
        />
      </div>

      {/* ─── Table ─── */}
      <div className={`transition-opacity duration-200 ${isFetching && !isLoading ? "opacity-60" : "opacity-100"}`}>
        <DynamicTable
          columns={columns}
          data={products}
          isLoading={isLoading}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          emptyMessage="No products found. Add your first product!"
          emptyIcon={Package}
        />
      </div>
    </div>
  );
}
