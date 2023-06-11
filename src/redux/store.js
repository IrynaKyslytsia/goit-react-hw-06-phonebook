import { configureStore } from '@reduxjs/toolkit';
import { contacts } from '../redux/contactsSlice';
import { filter } from '../redux/filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

const commonReducer = combineReducers({ contacts, filter });

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const persistedContactsReducer = persistReducer(persistConfig, commonReducer);

export const store = configureStore({
  reducer: {
    app: persistReducer(persistConfig, persistedContactsReducer),
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, PAUSE, REHYDRATE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);