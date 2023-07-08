import { combineReducers } from "redux";
import { productReducer as product } from "./reducers/products";
import { modalReducer as modal } from "./reducers/modal";
export const rootReducer = combineReducers({ product, modal });
