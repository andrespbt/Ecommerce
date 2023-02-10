import { createSlice } from '@reduxjs/toolkit';

export const ecommerceSlice = createSlice({
  name: 'ecommerce',
  initialState: {
    isSaving: false,
    cart: [],
    likes: [],
    buys: [],

    /*

    buys: [
        {
            productId: 'ABC',
            productTitle: 'Shirt',
            productImg: image,
            discount: '12%',
            date: 12341241
        }
    ]
    
    */
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
    removeCartProductById: (state, action) => {},
    updateCart: (state, action) => {},
    loadProducts: (state, { payload }) => {
      state.cart = payload.cartProducts;
      state.likes = payload.likedProducts;
    },
  },
});

export const {
  addNewCartProduct,
  addNewLikedProduct,
  deleteCartProductById,
  deleteLikedProductById,
  isSaving,
  loadProducts,
  removeCartProductById,
  updateCart,
} = ecommerceSlice.actions;
