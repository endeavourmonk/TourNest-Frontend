import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Review } from "@/types/Review";
import { Tour } from "@/types/Tour";

export const tournestApi = createApi({
  reducerPath: "tournestApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tournest-api.onrender.com/api/v1",
  }),
  endpoints: (builder) => ({
    getAllTours: builder.query<Tour[], void>({
      query: () => `/tours`,
    }),
    getAllReviews: builder.query<{ data: Review[] }, void>({
      query: () => `/reviews`,
    }),
    getSignup: builder.query({
      query: () => `/users/signup`,
    }),
    getSignin: builder.query({
      query: () => `/users/signin`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllToursQuery,
  useGetAllReviewsQuery,
  useGetSignupQuery,
  useGetSigninQuery,
} = tournestApi;
