import { createStore, combineReducers } from "redux";
import itemReducer from './reducers/itemReducer'
import themeReducer from './reducers/themeReducer'

const rootReducer = combineReducers({
  items: itemReducer,
  theme: themeReducer
})

export default createStore(rootReducer);