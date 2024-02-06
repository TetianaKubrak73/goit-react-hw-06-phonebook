import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContacts: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteContacts: (state, { payload }) =>
      state.filter(item => item.id !== payload),
  },
});

export const { addContacts, deleteContacts } = contactSlice.actions;

export default contactSlice.reducer;
