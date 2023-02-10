import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),

  endpoints: builder => ({
    getProductByCategory: builder.query({
      query: category => `/products/category/${category}`,
    }),
    getProductBySearch: builder.query({
      query: querySearch => `/products/search?q=${querySearch}`,
    }),
    getProductById: builder.query({
      query: id => `products/${id}`,
    }),
  }),
});

export const { useGetProductByCategoryQuery, useGetProductBySearchQuery, useGetProductByIdQuery } = productsApi;
