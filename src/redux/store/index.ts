import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Reducers from '../reducers';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, Reducers);
let createStoreWithMiddleware = applyMiddleware(
    thunk,
  )(createStore);
export const store = createStoreWithMiddleware(persistedReducer);
export const persistor = persistStore(store);
