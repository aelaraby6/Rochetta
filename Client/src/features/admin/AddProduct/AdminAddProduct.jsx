import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  PlusCircle,
  Package,
  DollarSign,
  Tag,
  FileText,
  Image as ImageIcon,
  ShieldAlert,
  Pill,
} from "lucide-react";
import {
  useAddProductMutation,
  useGetCategoriesQuery,
} from "../../products/store/productsApi";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  price: z.coerce.number().positive("Price must be greater than 0"),
  pieces: z.coerce.number().int().nonnegative("Pieces cannot be negative"),
  stripsPerBox: z.coerce.number().int().nonnegative().default(0),
  category: z.string().min(1, "Category is required"),
  desc: z.string().min(5, "Description is too short"),
  requires_prescription: z.boolean().default(false),
});

export default function AdminAddProduct() {
  const [addProduct, { isLoading: isAdding }] = useAddProductMutation();
  const { data: categoriesResponse } = useGetCategoriesQuery();
  const categories = categoriesResponse?.data || [];

  const [imageFile, setImageFile] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("stock", data.pieces);
    formData.append("category", data.category);
    formData.append("description", data.desc);
    formData.append("requires_prescription", data.requires_prescription);

    if (data.stripsPerBox > 0) {
      formData.append("has_strips", "true");
      formData.append("strip_count", data.stripsPerBox);
    } else {
      formData.append("has_strips", "false");
    }

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      await addProduct(formData).unwrap();
      reset();
      setImageFile(null);
    } catch (err) {
      console.error(err);
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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-1">
            <Package className="w-5 h-5" />
            <label className="font-semibold">Product Name</label>
          </div>
          <input
            {...register("name")}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition-all"
            placeholder="e.g. Panadol Extra"
          />
          {errors.name && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-1">
            <DollarSign className="w-5 h-5" />
            <label className="font-semibold">Price</label>
          </div>
          <input
            type="number"
            step="0.01"
            {...register("price")}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition-all"
            placeholder="0.00"
          />
          {errors.price && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.price.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-1">
            <Package className="w-5 h-5" />
            <label className="font-semibold">Available Pieces</label>
          </div>
          <input
            type="number"
            {...register("pieces")}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition-all"
            placeholder="Stock quantity"
          />
          {errors.pieces && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.pieces.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-1">
            <Pill className="w-5 h-5" />
            <label className="font-semibold">Strips per Box (Optional)</label>
          </div>
          <input
            type="number"
            {...register("stripsPerBox")}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition-all"
            placeholder="0 if not applicable"
          />
          {errors.stripsPerBox && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.stripsPerBox.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 md:col-span-2">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-1">
            <Tag className="w-5 h-5" />
            <label className="font-semibold">Category</label>
          </div>
          <select
            {...register("category")}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition-all"
          >
            <option value="">Select a Category</option>
            {categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.category.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 md:col-span-2">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-1">
            <FileText className="w-5 h-5" />
            <label className="font-semibold">Description</label>
          </div>
          <textarea
            {...register("desc")}
            rows="3"
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition-all resize-none"
            placeholder="Detailed product description..."
          />
          {errors.desc && (
            <span className="text-red-500 text-sm font-semibold">
              {errors.desc.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 md:col-span-2">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-1">
            <ImageIcon className="w-5 h-5" />
            <label className="font-semibold">Product Image</label>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="p-2 w-full text-sm text-gray-900 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
          />
        </div>

        <div className="flex items-center gap-3 md:col-span-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <ShieldAlert className="w-6 h-6 text-red-600" />
          <div className="flex items-center gap-2 flex-grow">
            <input
              type="checkbox"
              id="prescription"
              {...register("requires_prescription")}
              className="w-5 h-5 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
            />
            <label
              htmlFor="prescription"
              className="text-red-900 dark:text-red-400 font-bold cursor-pointer select-none"
            >
              Requires Medical Prescription (Roshetta)
            </label>
          </div>
        </div>

        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            disabled={isAdding}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold py-4 px-6 rounded-xl transition-all active:scale-[0.98] shadow-lg flex justify-center items-center gap-2 text-lg"
          >
            {isAdding ? (
              "Adding Product..."
            ) : (
              <>
                <PlusCircle className="w-6 h-6" /> Add Product to Store
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
