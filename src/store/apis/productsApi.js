import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),

  endpoints: builder => ({
    getProductByCategory: builder.query({
      query: category => `/products/categories/${category}`,
    }),
    getProductBySearch: builder.query({
      query: querySearch => `/products/search?q=${querySearch}`,
    }),
  }),
});

export const { useGetProductByCategoryQuery, useGetProductBySearchQuery } = productsApi;
