import { createSlice } from '@reduxjs/toolkit';

import * as operations from 'redux/auth/auth-operations';

const handlePending = store => {
  store.isLoading = true;
  store.error = null;
};

const handleRejected = (store, { payload }) => {
  store.isLoading = false;
  store.error = payload;
  store.token = null;
};

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(operations.signup.pending, handlePending)
      .addCase(operations.signup.fulfilled, (store, { payload }) => {
        store.user = payload?.user;
        store.token = payload?.token;
        store.isLoggedIn = true;
        store.isLoading = false;
      })
      .addCase(operations.signup.rejected, handleRejected)

      .addCase(operations.login.pending, handlePending)
      .addCase(operations.login.fulfilled, (store, { payload }) => {
        store.user = payload?.user;
        store.token = payload?.token;
        store.isLoggedIn = true;
        store.isLoading = false;
      })
      .addCase(operations.login.rejected, handleRejected)

      .addCase(operations.logout.pending, handlePending)
      .addCase(operations.logout.fulfilled, () => {
        return initialState;
      })
      .addCase(operations.logout.rejected, handleRejected)
      .addCase(operations.getCurrentUser.pending, handlePending)
      .addCase(operations.getCurrentUser.fulfilled, (store, { payload }) => {
        store.user = payload;
        store.isLoggedIn = true;
        store.isLoading = false;
      })
      .addCase(operations.getCurrentUser.rejected, handleRejected);
  },
});

export default authSlice.reducer;
