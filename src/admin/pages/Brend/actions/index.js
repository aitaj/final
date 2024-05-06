import API from "../../../api/index";
import {
  FETCH_BRENDS_FAIL,
  FETCH_BRENDS_REQUEST,
  FETCH_BRENDS_SUCCESS,
  DELETE_BREND_FAIL,
  DELETE_BREND_REQUEST,
  DELETE_BREND_SUCCESS,
  EDIT_BREND_REQUEST,
  EDIT_BREND_SUCCESS,
  EDIT_BREND_FAIL,
  ADD_BREND_REQUEST,
  ADD_BREND_SUCCESS,
  ADD_BREND_FAIL,
} from "../constants/index";

export const fetchBrends = () => async (dispatch) => {
  dispatch({ type: FETCH_BRENDS_REQUEST });

  try {
    const { data } = await API.get("/brends");
    dispatch({ type: FETCH_BRENDS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_BRENDS_FAIL, payload: error });
  }
};

export const deleteBrend = (id) => async (dispatch) => {
  dispatch({ type: DELETE_BREND_REQUEST });

  try {
    await API.delete(`/brends/${id}`);
    dispatch({ type: DELETE_BREND_SUCCESS });
    dispatch(fetchBrends());
  } catch (e) {
    dispatch({ type: DELETE_BREND_FAIL, payload: e });
  }
};

export const editBrend = (data) => async (dispatch) => {
  dispatch({ type: EDIT_BREND_REQUEST });

  try {
    await API.put(`/brends/${data.id}`, data);
    dispatch({ type: EDIT_BREND_SUCCESS });
    dispatch(fetchBrends());
  } catch (e) {
    dispatch({ type: EDIT_BREND_FAIL, payload: e });
  }
};

export const addBrend = (data) => async (dispatch) => {
  dispatch({ type: ADD_BREND_REQUEST });

  try {
    await API.post(`/brends`, data);
    dispatch({ type: ADD_BREND_SUCCESS });
    dispatch(fetchBrends());
  } catch (e) {
    dispatch({ type: ADD_BREND_FAIL, payload: e });
  }
};
