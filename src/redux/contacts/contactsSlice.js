import { createSlice } from '@reduxjs/toolkit';

import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contactsThunks';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending](state) {
      handlePending(state);
    },
    [fetchContacts.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.rejected](state, action) {
      handleRejected(state, action);
    },
    [addContact.pending](state) {
      handlePending(state);
    },
    [addContact.fulfilled](state, { payload }) {
      state.items = [...state.items, payload];
      state.isLoading = false;
      state.error = null;
    },
    [addContact.rejected](state, action) {
      handleRejected(state, action);
    },
    [deleteContact.pending](state) {
      handlePending(state);
    },
    [deleteContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(task => task.id === payload);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      handleRejected(state, action);
    },
    [updateContact.pending](state) {
      handlePending(state);
    },
    [updateContact.fulfilled](state, { payload }) {
      state.items = [
        ...state.items.filter(item => item.id !== payload.id),
        payload,
      ];
      state.isLoading = false;
      state.error = null;
    },
    [updateContact.rejected](state, action) {
      handleRejected(state, action);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
