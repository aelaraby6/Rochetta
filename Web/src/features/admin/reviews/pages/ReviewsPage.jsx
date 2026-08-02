import { useState } from "react";
import {
  MessageSquare,
  Trash2,
  Search,
  Filter,
  Star,
  Award,
} from "lucide-react";
import DynamicTable from "../../components/DynamicTable";
import { useDebounce } from "../../../../hooks/useDebounce";
import {
  useGetReviewsQuery,
  useDeleteReviewMutation,
  useUpdateReviewMutation,
} from "../api/reviewsApi";
import toast from "react-hot-toast";
import ReviewDetailsModal from "../components/ReviewDetailsModal";

export default function ReviewsPage() {
  const [page, setPage] = useState(1);
  const limit = 10;
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);
  const [ratingFilter, setRatingFilter] = useState("");

  const [selectedReviewId, setSelectedReviewId] = useState(null);

  const { data, isLoading } = useGetReviewsQuery({
    page,
    limit,
    search: debouncedSearch,
    rating: ratingFilter,
  });

  const [deleteReview] = useDeleteReviewMutation();
  const [updateReview] = useUpdateReviewMutation();

  const reviewsData = data?.data || [];
  const pagination = data?.pagination || { totalPages: 1 };

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        await deleteReview(id).unwrap();
        toast.success("Review deleted successfully");
      } catch (error) {
        toast.error(error?.data?.message || "Failed to delete review");
      }
    }
  };

  const handleToggleTop = async (id, currentStatus, e) => {
    e.stopPropagation();
    try {
      await updateReview({ id, isTopReview: !currentStatus }).unwrap();
      toast.success(
        currentStatus ? "Removed from top reviews" : "Added to top reviews",
      );
    } catch (error) {
      toast.error(error?.data?.message || "Failed to update status");
    }
  };

  const columns = [
    {
      key: "product",
      label: "Product",
      render: (_, row) => (
        <span className="font-semibold text-gray-900 dark:text-white">
          {row.product?.name || "N/A"}
        </span>
      ),
    },
    {
      key: "user",
      label: "Reviewer",
      render: (_, row) => (
        <span className="text-sm text-gray-700 dark:text-gray-300">
          {row.user?.name || "Unknown"}
        </span>
      ),
    },
    {
      key: "rating",
      label: "Rating",
      render: (val) => (
        <div className="flex items-center gap-1 text-amber-500">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {val}
          </span>
        </div>
      ),
    },
    {
      key: "comment",
      label: "Comment",
      render: (val) => (
        <span className="text-sm text-gray-500 truncate max-w-[200px] inline-block">
          {val}
        </span>
      ),
    },
    {
      key: "isTopReview",
      label: "Top",
      align: "center",
      render: (val) => (
        <span
          className={`px-2.5 py-1 text-xs font-medium rounded-full ${
            val
              ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
              : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
          }`}
        >
          {val ? "Top" : "Normal"}
        </span>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      align: "right",
      render: (_, row) => (
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={(e) => handleToggleTop(row._id, row.isTopReview, e)}
            title={row.isTopReview ? "Remove from Top" : "Make Top Review"}
            className={`p-2 rounded-lg transition-colors ${
              row.isTopReview
                ? "text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20"
                : "text-gray-400 hover:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20"
            }`}
          >
            <Award className="w-4 h-4" />
          </button>
          <button
            onClick={(e) => handleDelete(row._id, e)}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
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
            Reviews Management
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Monitor and manage product reviews from your customers.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-[#1e1e1e] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search by product or user..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(1);
            }}
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#252525] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#165938] outline-none transition-all"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-40">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              value={ratingFilter}
              onChange={(e) => {
                setRatingFilter(e.target.value);
                setPage(1);
              }}
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#252525] text-gray-900 dark:text-white focus:ring-2 focus:ring-[#165938] outline-none transition-all cursor-pointer appearance-none"
            >
              <option value="">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
          </div>
        </div>
      </div>

      <DynamicTable
        columns={columns}
        data={reviewsData}
        rowKey="_id"
        isLoading={isLoading}
        currentPage={page}
        totalPages={pagination.totalPages}
        onPageChange={setPage}
        emptyMessage="No reviews found."
        emptyIcon={MessageSquare}
        onRowClick={(row) => setSelectedReviewId(row._id)}
      />

      {selectedReviewId && (
        <ReviewDetailsModal
          isOpen={!!selectedReviewId}
          onClose={() => setSelectedReviewId(null)}
          reviewId={selectedReviewId}
        />
      )}
    </div>
  );
}
