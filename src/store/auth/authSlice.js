import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 1, // 1 : not-authenticated, 2: checking, 3: authenticated
    email: null,
    uid: null,
    logged: false,
    displayName: null,
    errorMessage: null,
    accountCreated: false,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = 3;
      state.displayName = payload.displayName;
      state.email = payload.email;
      state.uid = payload.uid;
      state.logged = true;
      state.errorMessage = null;
      state.accountCreated = false;
    },
    logout: (state, { payload }) => {
      state.status = 1;
      state.name = null;
      state.email = null;
      state.uid = null;
      state.logged = false;
      state.errorMessage = payload.errorMessage;
      state.accountCreated = false;
    },
    checkingCredentials: state => {
      state.status = 2;
    },
    accountCreatedSuccesfully: state => {
      state.status = 1;
      state.name = null;
      state.email = null;
      state.uid = null;
      state.logged = false;
      state.errorMessage = null;
      state.accountCreated = true;
    },
  },
});

export const { login, logout, checkingCredentials, accountCreatedSuccesfully } = authSlice.actions;
