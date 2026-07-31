import { apiSlice } from "../../../app/store/apiSlice";

export const ordersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => "/order",
      providesTags: ["Order"],
    }),
    cancelOrder: builder.mutation({
      query: (orderId) => ({
        url: `/order/${orderId}/cancel`,
        method: "PATCH",
      }),
      invalidatesTags: ["Order", "Product"],
    }),
  }),
});

export const { useGetOrdersQuery, useCancelOrderMutation } = ordersApi;
