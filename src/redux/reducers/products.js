import { PRODUCTS } from "../types";

const initialState = {
  allProducts: [],
  favoriteProducts: [],
  basketProducts: [],
  error: "",
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        allProducts: action.payload,
      };

    case PRODUCTS.GET_PRODUCTS_REQUESTED:
      return {
        ...state,
        allProducts: action.payload,
      };

    case PRODUCTS.GET_PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case PRODUCTS.GET_FAV_PRODUCT:
      return {
        ...state,
        favoriteProducts: action.payload,
      };

    case PRODUCTS.GET_BASKET_PRODUCT:
      return {
        ...state,
        basketProducts: action.payload,
      };

    default:
      return state;
  }
}
