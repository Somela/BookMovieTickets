import {FETCH_PRODUCTS_BEGIN,FETCH_PRODUCTS_SUCCESS,FETCH_PRODUCTS_FAILURE} from './action-type';

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});


export function fetchMovieDetails() {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return fetch("http://10.101.33.228:81/GetMovieDetails")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchProductsSuccess(json));
          return json;
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }