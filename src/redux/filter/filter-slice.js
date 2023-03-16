import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
});

export const { setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
