import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './apis/productsApi';
import { authSlice } from './auth';
import { ecommerceSlice } from './ecommerce';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ecommerce: ecommerceSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  devTools: false,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productsApi.middleware),
});
