import API from "../../../api/index";
import {
  FETCH_LOCATIONS_FAIL,
  FETCH_LOCATIONS_REQUEST,
  FETCH_LOCATIONS_SUCCESS,
  DELETE_LOCATION_FAIL,
  DELETE_LOCATION_REQUEST,
  DELETE_LOCATION_SUCCESS,
  EDIT_LOCATION_REQUEST,
  EDIT_LOCATION_SUCCESS,
  EDIT_LOCATION_FAIL,
  ADD_LOCATION_REQUEST,
  ADD_LOCATION_SUCCESS,
  ADD_LOCATION_FAIL,
} from "../constants/index";

export const fetchLocations = () => async (dispatch) => {
  dispatch({ type: FETCH_LOCATIONS_REQUEST });

  try {
    const { data } = await API.get("/locations");
    dispatch({ type: FETCH_LOCATIONS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_LOCATIONS_FAIL, payload: error });
  }
};

export const deleteLocation = (id) => async (dispatch) => {
  dispatch({ type: DELETE_LOCATION_REQUEST });

  try {
    await API.delete(`/locations/${id}`);
    dispatch({ type: DELETE_LOCATION_SUCCESS });
    dispatch(fetchLocations());
  } catch (e) {
    dispatch({ type: DELETE_LOCATION_FAIL, payload: e });
  }
};

export const editLocation = (data) => async (dispatch) => {
  dispatch({ type: EDIT_LOCATION_REQUEST });

  try {
    await API.put(`/locations/${data.id}`, data);
    dispatch({ type: EDIT_LOCATION_SUCCESS });
    dispatch(fetchLocations());
  } catch (e) {
    dispatch({ type: EDIT_LOCATION_FAIL, payload: e });
  }
};

export const addLocation= (data) => async (dispatch) => {
  dispatch({ type: ADD_LOCATION_REQUEST });

  try {
    await API.post(`/locations`, data);
    dispatch({ type: ADD_LOCATION_SUCCESS });
    dispatch(fetchLocations());
  } catch (e) {
    dispatch({ type: ADD_LOCATION_FAIL, payload: e });
  }
};
