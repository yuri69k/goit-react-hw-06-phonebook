import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore,persistReducer } from 'redux-persist';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage,
   blacklist: ['filter'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ contacts: contactsReducer, filter: filterReducer })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});



export const persistor = persistStore(store);
