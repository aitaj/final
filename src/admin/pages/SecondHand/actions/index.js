import API from "../../../api/index";
import {
  FETCH_SECONDHANDPRODUCTS_FAIL,
  FETCH_SECONDHANDPRODUCTS_REQUEST,
  FETCH_SECONDHANDPRODUCTS_SUCCESS,
  DELETE_SECONDHANDPRODUCT_FAIL,
  DELETE_SECONDHANDPRODUCT_REQUEST,
  DELETE_SECONDHANDPRODUCT_SUCCESS,
  EDIT_SECONDHANDPRODUCT_REQUEST,
  EDIT_SECONDHANDPRODUCT_SUCCESS,
  EDIT_SECONDHANDPRODUCT_FAIL,
  ADD_SECONDHANDPRODUCT_REQUEST,
  ADD_SECONDHANDPRODUCT_SUCCESS,
  ADD_SECONDHANDPRODUCT_FAIL,
} from "../constants/index";

export const fetchSecondHandProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_SECONDHANDPRODUCTS_REQUEST });

  try {
    const { data } = await API.get("/secondhandproducts");
    dispatch({ type: FETCH_SECONDHANDPRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_SECONDHANDPRODUCTS_FAIL, payload: error });
  }
};

export const deleteSecondHandProduct = (id) => async (dispatch) => {
  dispatch({ type: DELETE_SECONDHANDPRODUCT_REQUEST });

  try {
    await API.delete(`/secondhandproducts/${id}`);
    dispatch({ type: DELETE_SECONDHANDPRODUCT_SUCCESS });
    dispatch(fetchSecondHandProducts());
  } catch (e) {
    dispatch({ type: DELETE_SECONDHANDPRODUCT_FAIL, payload: e });
  }
};

export const editSecondHandProduct= (data) => async (dispatch) => {
  dispatch({ type: EDIT_SECONDHANDPRODUCT_REQUEST });

  try {
    await API.put(`/secondhandproducts/${data.id}`, data);
    dispatch({ type: EDIT_SECONDHANDPRODUCT_SUCCESS });
    dispatch(fetchSecondHandProducts());
  } catch (e) {
    dispatch({ type: EDIT_SECONDHANDPRODUCT_FAIL, payload: e });
  }
};

export const addSecondHandProduct = (data) => async (dispatch) => {
  dispatch({ type: ADD_SECONDHANDPRODUCT_REQUEST });

  try {
    await API.post(`/secondhandproducts`, data);
    dispatch({ type: ADD_SECONDHANDPRODUCT_SUCCESS });
    dispatch(fetchSecondHandProducts());
  } catch (e) {
    dispatch({ type: ADD_SECONDHANDPRODUCT_FAIL, payload: e });
  }
};
