import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//*createAsyncThunk - генератор экшенов жизненного цикла асинхронной функции.
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

//*для добавления контакта делает POST запрос, в ТЕЛЕ запроса указываем параметр функции с данными.
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', { name, number });
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

//*для добавления контакта делает DELETE запрос, в АДРЕСЕ запроса указываем id элемента.
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
