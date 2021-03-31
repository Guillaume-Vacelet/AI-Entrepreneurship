import { createStore, combineReducers } from "redux";
import itemReducer from './reducers/itemReducer'

const rootReducer = combineReducers({
  items: itemReducer
})

export default createStore(rootReducer);