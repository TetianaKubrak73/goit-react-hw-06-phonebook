import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contact-slice';
import filterReducer from './filter/filter-slice';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

// import { createReducer } from '@reduxjs/toolkit';

// import { addContacts, deleteContacts, setFilter } from './actions';
// const initialState = {
//   contacts: [],
//   filter: '',
// };
// const reducer = createReducer(initialState, builder => {
//   builder
//     .addCase(addContacts, (state, { payload }) => {
//       return { ...state, contacts: [...state.contacts, payload] };
//     })
//     .addCase(deleteContacts, (state, { payload }) => {
//       const newContacts = state.contacts.filter(
//         contact => contact.id !== payload
//       );
//       return { ...state, contacts: newContacts };
//     })
//     .addCase(setFilter, (state, { payload }) => {
//       return { ...state, filter: payload };
//     });
// });

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case addContacts.type:
//       const { contacts } = state;
//       return {
//         ...state,
//         contacts: [...contacts, payload],
//       };
//     case deleteContacts.type:
//       const newContacts = state.contacts.filter(item => item.id !== payload);
//       return {
//         ...state,
//         contacts: newContacts,
//       };
//     case setFilter.type:
//       return {
//         ...state,
//         filter: payload,
//       };
//     default:
//       return state;
//   }
// };

// export default reducer;
