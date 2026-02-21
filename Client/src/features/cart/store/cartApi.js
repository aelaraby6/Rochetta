import { apiSlice } from "../../../app/apiSlice";

export const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => "/cart/get-user-cart",
      providesTags: ["Cart"],
    }),
    addToCart: builder.mutation({
      query: ({ productId, quantity }) => ({
        url: "/cart/add-to-cart",
        method: "POST",
        body: { productId, quantity },
      }),
      invalidatesTags: ["Cart", "Product"],
    }),
    updateCartItem: builder.mutation({
      query: ({ productId, quantity }) => ({
        url: `/cart/${productId}`,
        method: "PATCH",
        body: { quantity },
      }),
      invalidatesTags: ["Cart", "Product"],
    }),
    removeFromCart: builder.mutation({
      query: (productId) => ({
        url: `/cart/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart", "Product"],
    }),
    clearCart: builder.mutation({
      query: () => ({
        url: "/cart/clear-cart",
        method: "DELETE",
      }),
      invalidatesTags: ["Cart", "Product"],
    }),
    createOrder: builder.mutation({
      query: (orderData) => ({
        url: "/order/create-order",
        method: "POST",
        body: orderData,
      }),
      invalidatesTags: ["Cart", "Product"],
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartItemMutation,
  useRemoveFromCartMutation,
  useClearCartMutation,
  useCreateOrderMutation,
} = cartApi;
