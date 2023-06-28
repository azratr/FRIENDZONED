import { combineReducers } from "redux";

import AuthReducer from './AuthReducer'
import postReducer from "./postReducer";
import chatUserReducer from "./ChatUserReducer"
export const reducers = combineReducers({AuthReducer,postReducer,chatUserReducer})