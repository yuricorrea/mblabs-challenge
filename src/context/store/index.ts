import AsyncStorage from '@react-native-async-storage/async-storage';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import Reducers from '../reducers';
import thunk from 'redux-thunk';

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
