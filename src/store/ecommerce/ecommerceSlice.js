import { createSlice } from '@reduxjs/toolkit';

export const ecommerceSlice = createSlice({
  name: 'ecommerce',
  initialState: {
    isSaving: false,
    cart: [],
    likes: [],
    buys: [],
  },
  reducers: {
    isSaving: state => {
      state.isSaving = true;
    },
    addNewLikedProduct: (state, action) => {
      state.likes.push(action.payload);
      state.isSaving = false;
    },
    deleteLikedProductById: (state, action) => {
      state.likes = state.likes.filter(product => product.id !== action.payload);
    },
    deleteCartProductById: (state, action) => {
      state.cart = state.cart.filter(product => product.id !== action.payload);
    },

    addNewCartProduct: (state, action) => {
      state.cart.push(action.payload);
      state.isSaving = false;
    },

    addNewBuys: (state, { payload }) => {
      payload.forEach(product => state.buys.push(product));
    },

    updateCartProductAmmount: (state, { payload }) => {
      state.cart.map(product => (product.id === payload.id ? payload : product));
    },
    loadProducts: (state, { payload }) => {
      state.cart = payload.cartProducts;
      state.likes = payload.likedProducts;
      state.buys = payload.boughtProducts;
    },
  },
});

export const {
  addNewBuys,
  addNewCartProduct,
  addNewLikedProduct,
  deleteCartProductById,
  deleteLikedProductById,
  isSaving,
  loadProducts,
  removeCartProductById,
  updateCartProductAmmount,
} = ecommerceSlice.actions;
