import API from "../../../api/index";
import {
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAIL,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
} from "../constants/index";

export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });

  try {
    const { data } = await API.get("/products");
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAIL, payload: error });
  }
};

export const deleteProduct= (id) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_REQUEST });

  try {
    await API.delete(`/products/${id}`);
    dispatch({ type: DELETE_PRODUCT_SUCCESS });
    dispatch(fetchProducts());
  } catch (e) {
    dispatch({ type: DELETE_PRODUCT_FAIL, payload: e });
  }
};

export const editProduct= (data) => async (dispatch) => {
  dispatch({ type: EDIT_PRODUCT_REQUEST });

  try {
    await API.put(`/products/${data.id}`, data);
    dispatch({ type: EDIT_PRODUCT_SUCCESS });
    dispatch(fetchProducts());
  } catch (e) {
    dispatch({ type: EDIT_PRODUCT_FAIL, payload: e });
  }
};

export const addProduct= (data) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT_REQUEST });

  try {
    await API.post(`/products`, data);
    dispatch({ type: ADD_PRODUCT_SUCCESS });
    dispatch(fetchProducts());
  } catch (e) {
    dispatch({ type: ADD_PRODUCT_FAIL, payload: e });
  }
};
