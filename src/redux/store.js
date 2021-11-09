import { configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit"; 
import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import weatherReducer from './reducers';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['current', 'currentFetch', 'token', 'error', 'loading', 'weatherFiveDay'],
}

export const store = configureStore({
    reducer: {
        main: persistReducer(persistConfig, weatherReducer)
    },
    middleware,
        devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

