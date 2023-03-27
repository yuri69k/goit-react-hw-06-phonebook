import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { INITIAL_CONTACTS } from '../data/contacts';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState:INITIAL_CONTACTS,

  reducers: {
    addContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: shortid.generate(),
            name: name,
            number: number,
          },
        };
      },
    },
       deleteContact: {
      reducer(state, action) {
        return state.filter(({ id }) => id !== action.payload);
      },
    },
        deleteAllContacts: state => {
      state.splice(0, state.length);
    },

    sortContacts: state => {
      state.sort((a, b) => a.name.localeCompare(b.name));
    },
    },
  }
);

export const { addContacts, deleteContact, deleteAllContacts, sortContacts} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

// Selectors


