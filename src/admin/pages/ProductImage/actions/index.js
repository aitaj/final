import API from "../../../api/index";
import {
  FETCH_PRODUCTIMAGES_FAIL,
  FETCH_PRODUCTIMAGES_REQUEST,
  FETCH_PRODUCTIMAGES_SUCCESS,
  DELETE_PRODUCTIMAGE_FAIL,
  DELETE_PRODUCTIMAGE_REQUEST,
  DELETE_PRODUCTIMAGE_SUCCESS,
  EDIT_PRODUCTIMAGE_REQUEST,
  EDIT_PRODUCTIMAGE_SUCCESS,
  EDIT_PRODUCTIMAGE_FAIL,
  ADD_PRODUCTIMAGE_REQUEST,
  ADD_PRODUCTIMAGE_SUCCESS,
  ADD_PRODUCTIMAGE_FAIL,
} from "../constants/index";

export const fetchProductImages = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTIMAGES_REQUEST });

  try {
    const { data } = await API.get("/productimages");
    dispatch({ type: FETCH_PRODUCTIMAGES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTIMAGES_FAIL, payload: error });
  }
};

export const deleteProductImage = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCTIMAGE_REQUEST });

  try {
    await API.delete(`/productimages/${id}`);
    dispatch({ type: DELETE_PRODUCTIMAGE_SUCCESS });
    dispatch(fetchProductImages());
  } catch (e) {
    dispatch({ type: DELETE_PRODUCTIMAGE_FAIL, payload: e });
  }
};

export const editProductImage= (data) => async (dispatch) => {
  dispatch({ type: EDIT_PRODUCTIMAGE_REQUEST });

  try {
    await API.put(`/productimages/${data.id}`, data);
    dispatch({ type: EDIT_PRODUCTIMAGE_SUCCESS });
    dispatch(fetchProductImages());
  } catch (e) {
    dispatch({ type: EDIT_PRODUCTIMAGE_FAIL, payload: e });
  }
};

export const addProductImage = (data) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCTIMAGE_REQUEST });

  try {
    await API.post(`/productimages`, data);
    dispatch({ type: ADD_PRODUCTIMAGE_SUCCESS });
    dispatch(fetchProductImages());
  } catch (e) {
    dispatch({ type: ADD_PRODUCTIMAGE_FAIL, payload: e });
  }
};
