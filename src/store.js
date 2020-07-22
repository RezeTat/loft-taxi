import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { auth } from "./authMiddleware";
import {registration} from './registrationMiddleware';
import {profile} from './profileMiddleware'


export const store = createStore(
    rootReducer, applyMiddleware(auth, registration,profile))
