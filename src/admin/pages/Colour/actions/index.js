import API from "../../../api/index";
import {
  FETCH_COLOURS_FAIL,
  FETCH_COLOURS_REQUEST,
  FETCH_COLOURS_SUCCESS,
  DELETE_COLOUR_FAIL,
  DELETE_COLOUR_REQUEST,
  DELETE_COLOUR_SUCCESS,
  EDIT_COLOUR_REQUEST,
  EDIT_COLOUR_SUCCESS,
  EDIT_COLOUR_FAIL,
  ADD_COLOUR_REQUEST,
  ADD_COLOUR_SUCCESS,
  ADD_COLOUR_FAIL,
} from "../constants/index";

export const fetchColours = () => async (dispatch) => {
  dispatch({ type: FETCH_COLOURS_REQUEST });

  try {
    const { data } = await API.get("/colours");
    dispatch({ type: FETCH_COLOURS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_COLOURS_FAIL, payload: error });
  }
};

export const deleteColour = (id) => async (dispatch) => {
  dispatch({ type: DELETE_COLOUR_REQUEST });

  try {
    await API.delete(`/colours/${id}`);
    dispatch({ type: DELETE_COLOUR_SUCCESS });
    dispatch(fetchColours());
  } catch (e) {
    dispatch({ type: DELETE_COLOUR_FAIL, payload: e });
  }
};

export const editColour = (data) => async (dispatch) => {
  dispatch({ type: EDIT_COLOUR_REQUEST });

  try {
    await API.put(`/colours/${data.id}`, data);
    dispatch({ type: EDIT_COLOUR_SUCCESS });
    dispatch(fetchColours());
  } catch (e) {
    dispatch({ type: EDIT_COLOUR_FAIL, payload: e });
  }
};

export const addColour = (data) => async (dispatch) => {
  dispatch({ type: ADD_COLOUR_REQUEST });

  try {
    await API.post(`/colours`, data);
    dispatch({ type: ADD_COLOUR_SUCCESS });
    dispatch(fetchColours());
  } catch (e) {
    dispatch({ type: ADD_COLOUR_FAIL, payload: e });
  }
};
