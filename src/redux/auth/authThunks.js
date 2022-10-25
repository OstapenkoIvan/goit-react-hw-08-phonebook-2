import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unsetToken() {
    axios.defaults.headers.common.Authorization = '';
  },
};

//* If i have to fetch, should use it like this.
// fetch('URL', {
//   method: 'POST',
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// });

export const authSignup = createAsyncThunk(
  'auth/signup',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', {
        name,
        email,
        password,
      });
      token.setToken(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const authLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', {
        email,
        password,
      });
      token.setToken(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const authLogOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/logout');
      token.unsetToken();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const authRefresh = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const {
      auth: { token: persistedToken },
    } = getState();
    if (!persistedToken) return rejectWithValue();

    token.setToken(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
