import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { auth } from "./authMiddleware";

export const store = createStore(rootReducer, applyMiddleware(auth));
