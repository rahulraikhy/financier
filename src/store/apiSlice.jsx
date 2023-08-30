import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "http://localhost:3000/api/users/";

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => "controllers/categories", // Update to match the route
            providesTags: ["categories"]
        }),
        getLabels: builder.query({
            query: () => "controllers/categories", // Update to match the route
            providesTags: ["transaction"]
        }),
        addTransaction: builder.mutation({
            query: (initialTransaction) => ({
                url: "controllers/categories", // Update to match the route
                method: "POST",
                body: initialTransaction,
            }),
            invalidatesTags: ["transaction"]
        }),
        deleteTransaction: builder.mutation({
            query: recordid => ({
                url: "controllers/categories", // Update to match the route
                method: "DELETE",
                body: recordid
            }),
            invalidatesTags: ["transaction"]
        })
    })
})

export default apiSlice;
