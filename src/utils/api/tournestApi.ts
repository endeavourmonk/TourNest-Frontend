import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tournestApi = createApi({
  reducerPath: "tournestApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.tournest.rf.gd/api/v1" }),
  endpoints: (builder) => ({
    getAllTours: builder.query({
      query: () => `/tours`,
    }),
    getAllReviews: builder.query({
      query: () => `/reviews`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllToursQuery, useGetAllReviewsQuery } = tournestApi;
