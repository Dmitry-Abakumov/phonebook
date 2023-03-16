import { createSlice } from '@reduxjs/toolkit';
// import initialState from 'modules/LoginForm/intial-state';

import * as operations from 'redux/auth/auth-operations';

const handlePending = store => {
  store.isLoading = true;
  store.error = null;
};

const handleRejected = (store, { payload }) => {
  store.isLoading = false;
  store.error = payload;
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
        const { user, token } = payload;
        store.user = user;
        store.token = token;
        store.isLoggedIn = true;
        store.isLoading = false;
      })
      .addCase(operations.signup.rejected, handleRejected)

      .addCase(operations.login.pending, handlePending)
      .addCase(operations.login.fulfilled, (store, { payload }) => {
        const { user, token } = payload;
        store.user = user;
        store.token = token;
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