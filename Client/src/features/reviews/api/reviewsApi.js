import { apiSlice } from "../../../app/store/apiSlice";

export const reviewsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProductReviews: builder.query({
      query: (productId) => `/reviews?product=${productId}`,
      providesTags: (result, error, productId) => [
        { type: "Review", id: productId },
      ],
    }),

    getReviewById: builder.query({
      query: (id) => `/reviews/${id}`,
      providesTags: (result, error, id) => [{ type: "Review", id }],
    }),

    addReview: builder.mutation({
      query: (newReview) => ({
        url: "/reviews",
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: (result, error, { product }) => [
        { type: "Review", id: product },
        "Product",
      ],
    }),

    updateReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/reviews/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, { productId }) => [
        { type: "Review", id: productId },
        "Product",
      ],
    }),

    deleteReview: builder.mutation({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Review", "Product"],
    }),
  }),
});

export const {
  useGetProductReviewsQuery,
  useGetReviewByIdQuery,
  useAddReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewsApi;
