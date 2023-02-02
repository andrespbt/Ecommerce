import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 1, //* 1 : not-authenticated, 2: checking, 3: authenticated, 4: account created, 5: anonymus login
    email: null,
    uid: null,
    logged: false,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = payload.status;
      state.displayName = payload.displayName;
      state.email = payload.email;
      state.uid = payload.uid;
      state.logged = true;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = 1;
      state.displayName = null;
      state.email = null;
      state.uid = null;
      state.logged = false;
      state.photoURL = null;
      state.errorMessage = payload?.errorMessage;
    },
    isLoading: state => {
      state.status = 2;
    },
    accountCreatedSuccesfully: state => {
      state.status = 4;
      state.errorMessage = null;
      state.displayName = null;
      state.email = null;
      state.uid = null;
      state.logged = false;
      state.photoURL = null;
    },
  },
});

export const { login, logout, isLoading, accountCreatedSuccesfully } = authSlice.actions;
