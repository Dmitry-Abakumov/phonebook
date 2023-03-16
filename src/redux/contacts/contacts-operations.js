import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import * as API from 'shared/services/contacts-api';

import 'react-toastify/dist/ReactToastify.css';

export const fetchAllContacts = createAsyncThunk(
  'contacts/faetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await API.getAllContacts();

      return contacts;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const contact = await API.addContact(data);

      return contact;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
  {
    condition: ({ name: enteredName }, { getState }) => {
      const {
        contacts: { items },
      } = getState();
      const isDublicate = items.some(
        ({ name }) => name.toLowerCase() === enteredName.toLowerCase()
      );

      if (isDublicate) {
        toast.warn('You already have a contact with this name', {
          position: toast.POSITION.TOP_RIGHT,
        });

        return false;
      }
    },
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await API.deleteContact(id);

      return id;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
