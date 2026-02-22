import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Package,
  DollarSign,
  Tag,
  FileText,
  Image as ImageIcon,
  ShieldAlert,
  Pill,
  Loader2,
  Save,
  ArrowLeft,
} from "lucide-react";
import toast from "react-hot-toast";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
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

export default function AdminEditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: productRes, isLoading: isFetching } =
    useGetProductByIdQuery(id);
  const { data: categoriesResponse } = useGetCategoriesQuery();
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

  const product = productRes?.data;
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

  useEffect(() => {
    if (product) {
      reset({
        name: product.name,
        price: product.price,
        pieces: product.stock ?? product.pieces ?? 0,
        stripsPerBox: product.strip_count ?? product.stripsPerBox ?? 0,
        category: product.category?._id || product.category || "",
        desc: product.description || product.desc || "",
        requires_prescription:
          product.requires_prescription || product.IsRoshetta || false,
      });
    }
  }, [product, reset]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("stock", data.pieces);
    formData.append("category", data.category);
    formData.append("description", data.desc);
    formData.append("requires_prescription", data.requires_prescription);
    formData.append("has_strips", data.stripsPerBox > 0 ? "true" : "false");
    formData.append("strip_count", data.stripsPerBox);

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      await updateProduct({ id, data: formData }).unwrap();
      toast.success("Product updated successfully");
      navigate(-1);
    } catch (err) {
      toast.error(err.data?.message || "Failed to update product");
    }
  };

  if (isFetching) {
    return (
      <div className="flex justify-center items-center mt-40">
        <Loader2 className="w-12 h-12 animate-spin text-green-600" />
      </div>
    );
  }

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
            <label className="font-semibold">Strips per Box</label>
          </div>
          <input
            type="number"
            {...register("stripsPerBox")}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition-all"
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
            <label className="font-semibold">Update Product Image</label>
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
              Requires Medical Prescription
            </label>
          </div>
        </div>

        <div className="md:col-span-2 mt-4">
          <button
            type="submit"
            disabled={isUpdating}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold py-4 px-6 rounded-xl transition-all active:scale-[0.98] shadow-lg flex justify-center items-center gap-2 text-lg"
          >
            {isUpdating ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <>
                <Save className="w-6 h-6" /> Save Changes
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
