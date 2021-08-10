import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import tempStateReducer from './apiCall/reducer';

const rootReducer = combineReducers({
    tempStateReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['tempStateReducer'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
// const myMiddleWare = store => next => action => {

//   if(action.type !== 'persist/REHYDRATE'){
//      next(action)
//   }}
type RootState = ReturnType<typeof rootReducer>

const store = createStore(persistedReducer, applyMiddleware(thunk, createLogger()));

let persistor = persistStore(store); 
export {store, persistor, RootState};
