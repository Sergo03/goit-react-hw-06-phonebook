import contactsReducer from './Contacts/reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger'

const middleware=[...getDefaultMiddleware(),logger]

// const store = createStore(rootReducer,composeWithDevTools());

const store = configureStore({
    reducer: {
 contacts:contactsReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV ==='development',
})

export default store;