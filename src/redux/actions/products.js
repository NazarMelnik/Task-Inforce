import { PRODUCTS } from "../types";

export function requestProducts(data) {
  return {
    type: PRODUCTS.GET_PRODUCTS_SUCCESS,
    payload: data,
  };
}

export function errorProduct(err) {
  return {
    type: PRODUCTS.GET_PRODUCTS_ERROR,
    payload: err,
  };
}

export function sendRequest() {
  return {
    type: PRODUCTS.GET_PRODUCTS_REQUESTED,
    payload: "REQUEST IN WORK",
  };
}
export function getFavProduct() {
  const data = JSON.parse(localStorage.getItem("favProducts")) || [];
  return {
    type: PRODUCTS.GET_FAV_PRODUCT,
    payload: data,
  };
}
export function getBasketProduct() {
  const data = JSON.parse(localStorage.getItem("basketProducts")) || [];
  return {
    type: PRODUCTS.GET_BASKET_PRODUCT,
    payload: data,
  };
}
export function fetchProducts() {
  return async (dispatch) => {
    dispatch(sendRequest());
    try {
      const response = await fetch("product.json").then((response) =>
        response.json()
      );
      dispatch(requestProducts(response));
    } catch (error) {
      dispatch(errorProduct(error));
    }
  };
}
