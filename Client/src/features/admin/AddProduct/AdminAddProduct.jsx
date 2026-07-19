import { PlusCircle } from "lucide-react";
import toast from "react-hot-toast";
import { useAddProductMutation } from "../../products/store/productsApi";
import ProductForm from "../components/ProductForm";

export default function AdminAddProduct() {
  const [addProduct, { isLoading: isAdding }] = useAddProductMutation();

  const handleAddSubmit = async (formData) => {
    try {
      await addProduct(formData).unwrap();
      toast.success("Product added successfully");
    } catch (err) {
      toast.error(err.data?.message || "Failed to add product");
      console.error(err);
      throw err;
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
        <PlusCircle className="w-8 h-8 text-green-600" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Add New Product
        </h2>
      </div>

      <ProductForm
        onSubmit={handleAddSubmit}
        isLoading={isAdding}
        submitLabel="Add Product to Store"
        submitIcon={<PlusCircle className="w-6 h-6" />}
        isAddMode={true}
      />
    </div>
  );
}
