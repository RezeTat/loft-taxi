import { combineReducers } from "redux";
import auth from "./auth";
import registration from './registration'
import profile from './profile'

export default combineReducers({auth, registration, profile});

