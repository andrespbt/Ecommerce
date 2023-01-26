import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 1, //* 1 : not-authenticated, 2: checking, 3: authenticated, 4: account created
    email: null,
    uid: null,
    logged: false,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = 3;
      state.displayName = payload.displayName;
      state.email = payload.email;
      state.uid = payload.uid;
      state.logged = true;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = 1;
      state.name = null;
      state.email = null;
      state.uid = null;
      state.logged = false;
      state.photoURL = null;
      state.errorMessage = payload?.errorMessage;
    },
    checkingCredentials: state => {
      state.status = 2;
    },
    accountCreatedSuccesfully: (state) => {
      state.status = 4;
      state.errorMessage = null;
    },
  },
});

export const { login, logout, checkingCredentials, accountCreatedSuccesfully } = authSlice.actions;
