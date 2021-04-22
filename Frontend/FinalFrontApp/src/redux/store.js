import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

import itemReducer from './reducers/itemReducer'
import themeReducer from './reducers/themeReducer'

const appReducer = combineReducers({ 
  items: itemReducer,
  theme: themeReducer
})

const rootReducer = (state, action) => {
  if (action.type === "RESET_STORE") {
    AsyncStorage.removeItem('persist:root')
    state = undefined;
  }
  return appReducer(state, action);
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store);


// export default createStore(rootReducer);