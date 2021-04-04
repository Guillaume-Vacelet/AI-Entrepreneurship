import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

import itemReducer from './reducers/itemReducer'
import themeReducer from './reducers/themeReducer'

const rootReducer = combineReducers({
  items: itemReducer,
  theme: themeReducer
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store);


// export default createStore(rootReducer);