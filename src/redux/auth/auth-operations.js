import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import * as API from 'shared/services/auth-api';

import 'react-toastify/dist/ReactToastify.css';

export const signup = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      return await API.signup(userData);
    } catch ({ response }) {
      toast.error(
        'Oops, something went wrong, possibly such user already exists.',
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      return rejectWithValue(response.data);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      return await API.login(userData);
    } catch ({ response }) {
      toast.error(
        'Oops, something went wrong, possibly wrong login or password.',
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      return rejectWithValue(response.data);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      return await API.logout();
    } catch ({ response }) {
      toast.error('Oops, something went wrong, please try again.', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return rejectWithValue(response.data);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue, getState }) => {
    const {
      auth: { token },
    } = getState();

    try {
      return await API.getCurrent(token);
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        auth: { token },
      } = getState();

      if (!token) return false;
    },
  }
);
