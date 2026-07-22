import { PlusCircle } from "lucide-react";
import toast from "react-hot-toast";
import { useAddProductMutation } from "../../products/store/productsApi";
import ProductForm from "./ProductForm";

export default function AddProductPage() {
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
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-200 dark:border-gray-800">
          <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <PlusCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Add New Product
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Fill in the details below to add a product to the store.
            </p>
          </div>
        </div>

        <ProductForm
          onSubmit={handleAddSubmit}
          isLoading={isAdding}
          submitLabel="Add Product to Store"
          submitIcon={<PlusCircle className="w-6 h-6" />}
          isAddMode={true}
        />
      </div>
    </div>
  );
}
