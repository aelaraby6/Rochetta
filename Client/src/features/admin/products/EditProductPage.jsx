import { useNavigate, useParams } from "react-router-dom";
import { Loader2, Save, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../products/store/productsApi";
import ProductForm from "./ProductForm";

export default function EditProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: productRes, isLoading: isFetching } = useGetProductByIdQuery(id);
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

  const product = productRes?.data;

  const handleEditSubmit = async (formData) => {
    try {
      await updateProduct({ id, data: formData }).unwrap();
      toast.success("Product updated successfully");
      navigate("/dashboard/products");
    } catch (err) {
      toast.error(err.data?.message || "Failed to update product");
      console.error(err);
      throw err;
    }
  };

  if (isFetching) {
    return (
      <div className="flex justify-center items-center py-32">
        <Loader2 className="w-10 h-10 animate-spin text-green-600" />
      </div>
    );
  }

  const initialValues = product
    ? {
        name: product.name,
        price: product.price,
        pieces: product.stock ?? product.pieces ?? 0,
        stripsPerBox: product.strip_count ?? product.stripsPerBox ?? 0,
        category: product.category?._id || product.category || "",
        desc: product.description || product.desc || "",
        requires_prescription:
          product.requires_prescription || product.IsRoshetta || false,
      }
    : undefined;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/dashboard/products")}
              className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Back to products"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Edit Product
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Update the product details below.
              </p>
            </div>
          </div>
        </div>

        {initialValues && (
          <ProductForm
            initialValues={initialValues}
            onSubmit={handleEditSubmit}
            isLoading={isUpdating}
            submitLabel="Save Changes"
            submitIcon={<Save className="w-6 h-6" />}
            isAddMode={false}
          />
        )}
      </div>
    </div>
  );
}
