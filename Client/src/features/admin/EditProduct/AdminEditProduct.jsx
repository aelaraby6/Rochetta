import { useNavigate, useParams } from "react-router-dom";
import { Loader2, Save, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../products/store/productsApi";
import ProductForm from "../components/ProductForm";

export default function AdminEditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: productRes, isLoading: isFetching } = useGetProductByIdQuery(id);
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

  const product = productRes?.data;

  const handleEditSubmit = async (formData) => {
    try {
      await updateProduct({ id, data: formData }).unwrap();
      toast.success("Product updated successfully");
      navigate(-1);
    } catch (err) {
      toast.error(err.data?.message || "Failed to update product");
      console.error(err);
      throw err;
    }
  };

  if (isFetching) {
    return (
      <div className="flex justify-center items-center mt-40">
        <Loader2 className="w-12 h-12 animate-spin text-green-600" />
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
    <div className="max-w-4xl mx-auto mt-12 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Edit Product
          </h2>
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
  );
}
