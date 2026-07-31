import { X } from "lucide-react";
import toast from "react-hot-toast";
import ProductForm from "./ProductForm";
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from "../../../products/api/productsApi";

export default function ProductActionModal({ isOpen, onClose, productToEdit }) {
  const [addProduct, { isLoading: isAdding }] = useAddProductMutation();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

  if (!isOpen) return null;

  const isEditMode = !!productToEdit;
  const isLoading = isAdding || isUpdating;

  const handleSubmit = async (formData) => {
    try {
      if (isEditMode) {
        await updateProduct({ id: productToEdit._id, data: formData }).unwrap();
        toast.success("Product updated successfully!");
      } else {
        await addProduct(formData).unwrap();
        toast.success("Product created successfully!");
      }
      onClose();
    } catch (error) {
      toast.error(error?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {isEditMode ? "Edit Product" : "Create New Product"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <ProductForm
            initialData={productToEdit}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
