import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/user",
    credentials: "include",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => "/me",
      providesTags: ["User"],
    }),

    updateAvatar: builder.mutation({
      query: (formData) => ({
        url: "/update-avatar",
        method: "PATCH", 
        body: formData,
      }),
      invalidatesTags: ["User"],
    }),

    updateProfile: builder.mutation({
      query: (profileData) => ({
        url: "/update-profile",
        method: "PATCH",
        body: profileData,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetMeQuery,
  useUpdateAvatarMutation,
  useUpdateProfileMutation,
} = userApi;
