import contactsReducer from './Contacts/reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import logger from 'redux-logger'

const contactsPersistConfig = {
  key: 'contacts',
    storage,
   blacklist: ['filter'],
}

const middleware=[...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),logger]

// const rootReducer=combineReducers({
//  contacts:persistReducer(persistConfig,contactsReducer),
//     })

// const store = createStore(rootReducer,composeWithDevTools());
// const persistedReducer =persistReducer(persistConfig,rootReducer)


export const store = configureStore({
    reducer: {
 contacts:persistReducer(contactsPersistConfig,contactsReducer),
    },
    middleware,
    devTools: process.env.NODE_ENV ==='development',
})

 export let persistor = persistStore(store)

