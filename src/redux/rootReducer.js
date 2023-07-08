import { combineReducers } from "redux";
import { productReducer as product } from "./reducers/products";
export const rootReducer = combineReducers({ product });
