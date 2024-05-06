import API from "../../../api/index";
import {
  FETCH_CATEGORIES_FAIL,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  EDIT_CATEGORY_REQUEST,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAIL,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAIL,
} from "../constants/index";

export const fetchCategories = () => async (dispatch) => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST });

  try {
    const { data } = await API.get("/categories");
    dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_CATEGORIES_FAIL, payload: error });
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  dispatch({ type: DELETE_CATEGORY_REQUEST });

  try {
    await API.delete(`/categories/${id}`);
    dispatch({ type: DELETE_CATEGORY_SUCCESS });
    dispatch(fetchCategories());
  } catch (e) {
    dispatch({ type: DELETE_CATEGORY_FAIL, payload: e });
  }
};

export const editCategory = (data) => async (dispatch) => {
  dispatch({ type: EDIT_CATEGORY_REQUEST });

  try {
    await API.put(`/categories/${data.id}`, data);
    dispatch({ type: EDIT_CATEGORY_SUCCESS });
    dispatch(fetchCategories());
  } catch (e) {
    dispatch({ type: EDIT_CATEGORY_FAIL, payload: e });
  }
};

export const addCategory = (data) => async (dispatch) => {
  dispatch({ type: ADD_CATEGORY_REQUEST });

  try {
    await API.post(`/categories`, data);
    dispatch({ type: ADD_CATEGORY_SUCCESS });
    dispatch(fetchCategories());
  } catch (e) {
    dispatch({ type: ADD_CATEGORY_FAIL, payload: e });
  }
};
