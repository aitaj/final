import API from "../../../api/index";
import {
  FETCH_SIZES_FAIL,
  FETCH_SIZES_REQUEST,
  FETCH_SIZES_SUCCESS,
  DELETE_SIZE_FAIL,
  DELETE_SIZE_REQUEST,
  DELETE_SIZE_SUCCESS,
  EDIT_SIZE_REQUEST,
  EDIT_SIZE_SUCCESS,
  EDIT_SIZE_FAIL,
  ADD_SIZE_REQUEST,
  ADD_SIZE_SUCCESS,
  ADD_SIZE_FAIL,
} from "../constants/index";

export const fetchSizes = () => async (dispatch) => {
  dispatch({ type: FETCH_SIZES_REQUEST });

  try {
    const { data } = await API.get("/sizes");
    dispatch({ type: FETCH_SIZES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_SIZES_FAIL, payload: error });
  }
};

export const deleteSize = (id) => async (dispatch) => {
  dispatch({ type: DELETE_SIZE_REQUEST });

  try {
    await API.delete(`/sizes/${id}`);
    dispatch({ type: DELETE_SIZE_SUCCESS });
    dispatch(fetchSizes());
  } catch (e) {
    dispatch({ type: DELETE_SIZE_FAIL, payload: e });
  }
};

export const editSize = (data) => async (dispatch) => {
  dispatch({ type: EDIT_SIZE_REQUEST });

  try {
    await API.put(`/sizes/${data.id}`, data);
    dispatch({ type: EDIT_SIZE_SUCCESS });
    dispatch(fetchSizes());
  } catch (e) {
    dispatch({ type: EDIT_SIZE_FAIL, payload: e });
  }
};

export const addSize = (data) => async (dispatch) => {
  dispatch({ type: ADD_SIZE_REQUEST });

  try {
    await API.post(`/sizes`, data);
    dispatch({ type: ADD_SIZE_SUCCESS });
    dispatch(fetchSizes());
  } catch (e) {
    dispatch({ type: ADD_SIZE_FAIL, payload: e });
  }
};
