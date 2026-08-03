// userApi.js
import { apiSlice } from "../../../app/store/apiSlice"; 

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => "/user/me",
      providesTags: ["User"],
    }),

    updateAvatar: builder.mutation({
      query: (formData) => ({
        url: "/user/update-avatar",
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),

    updateProfile: builder.mutation({
      query: (profileData) => ({
        url: "/user/update-profile",
        method: "PATCH",
        body: profileData,
      }),
      invalidatesTags: ["User"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetMeQuery,
  useUpdateAvatarMutation,
  useUpdateProfileMutation,
} = userApi;
