import { X, Star, Loader2 } from "lucide-react";
import { useGetReviewByIdQuery } from "../api/reviewsApi";

export default function ReviewDetailsModal({ isOpen, onClose, reviewId }) {
  const { data, isLoading } = useGetReviewByIdQuery(reviewId, {
    skip: !reviewId,
  });

  if (!isOpen) return null;

  const review = data?.data;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Review Details
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {isLoading ? (
            <div className="flex justify-center items-center py-10">
              <Loader2 className="w-8 h-8 animate-spin text-[#288657]" />
            </div>
          ) : !review ? (
            <div className="text-center py-10 text-gray-500">
              Review not found.
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-[#252525] rounded-xl">
                <img
                  src={review.product.image}
                  alt={review.product.name}
                  className="w-16 h-16 object-cover rounded-lg border border-gray-200 dark:border-gray-700"
                />
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                    Product
                  </p>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {review.product.name}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={
                    review.user.avatar ||
                    `https://ui-avatars.com/api/?name=${review.user.name}`
                  }
                  alt={review.user.name}
                  className="w-12 h-12 object-cover rounded-full border-2 border-gray-200 dark:border-gray-700"
                />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {review.user.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {new Date(review.createdAt).toLocaleString("en-GB")}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating
                          ? "fill-amber-500 text-amber-500"
                          : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
                      }`}
                    />
                  ))}
                </div>
                <div className="p-4 bg-gray-50 dark:bg-[#252525] rounded-xl">
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                    {review.comment}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-5 border-t border-gray-100 dark:border-gray-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-xl transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
