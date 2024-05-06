import API from "../../../api/index";
import {
  FETCH_SUBCATEGORIES_FAIL,
  FETCH_SUBCATEGORIES_REQUEST,
  FETCH_SUBCATEGORIES_SUCCESS,
  DELETE_SUBCATEGORY_FAIL,
  DELETE_SUBCATEGORY_REQUEST,
  DELETE_SUBCATEGORY_SUCCESS,
  EDIT_SUBCATEGORY_REQUEST,
  EDIT_SUBCATEGORY_SUCCESS,
  EDIT_SUBCATEGORY_FAIL,
  ADD_SUBCATEGORY_REQUEST,
  ADD_SUBCATEGORY_SUCCESS,
  ADD_SUBCATEGORY_FAIL,
} from "../constants/index";

export const fetchSubcategories = () => async (dispatch) => {
  dispatch({ type: FETCH_SUBCATEGORIES_REQUEST });

  try {
    const { data } = await API.get("/subcategories");
    dispatch({ type: FETCH_SUBCATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_SUBCATEGORIES_FAIL, payload: error });
  }
};

export const deleteSubcategory = (id) => async (dispatch) => {
  dispatch({ type: DELETE_SUBCATEGORY_REQUEST });

  try {
    await API.delete(`/subcategories/${id}`);
    dispatch({ type: DELETE_SUBCATEGORY_SUCCESS });
    dispatch(fetchSubcategories());
  } catch (e) {
    dispatch({ type: DELETE_SUBCATEGORY_FAIL, payload: e });
  }
};

export const editSubcategory = (data) => async (dispatch) => {
  dispatch({ type: EDIT_SUBCATEGORY_REQUEST });

  try {
    await API.put(`/subcategories/${data.id}`, data);
    dispatch({ type: EDIT_SUBCATEGORY_SUCCESS });
    dispatch(fetchSubcategories());
  } catch (e) {
    dispatch({ type: EDIT_SUBCATEGORY_FAIL, payload: e });
  }
};

export const addSubcategory = (data) => async (dispatch) => {
  dispatch({ type: ADD_SUBCATEGORY_REQUEST });

  try {
    await API.post(`/subcategories`, data);
    dispatch({ type: ADD_SUBCATEGORY_SUCCESS });
    dispatch(fetchSubcategories());
  } catch (e) {
    dispatch({ type: ADD_SUBCATEGORY_FAIL, payload: e });
  }
};
