import API from "../../../api/index";
import {
  FETCH_COMPANIES_FAIL,
  FETCH_COMPANIES_REQUEST,
  FETCH_COMPANIES_SUCCESS,
  DELETE_COMPANY_FAIL,
  DELETE_COMPANY_REQUEST,
  DELETE_COMPANY_SUCCESS,
  EDIT_COMPANY_REQUEST,
  EDIT_COMPANY_SUCCESS,
  EDIT_COMPANY_FAIL,
  ADD_COMPANY_REQUEST,
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_FAIL,
} from "../constants/index";

export const fetchCompanies = () => async (dispatch) => {
  dispatch({ type: FETCH_COMPANIES_REQUEST });

  try {
    const { data } = await API.get("/companies");
    dispatch({ type: FETCH_COMPANIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_COMPANIES_FAIL, payload: error });
  }
};

export const deleteCompany = (id) => async (dispatch) => {
  dispatch({ type: DELETE_COMPANY_REQUEST });

  try {
    await API.delete(`/companies/${id}`);
    dispatch({ type: DELETE_COMPANY_SUCCESS });
    dispatch(fetchCompanies());
  } catch (e) {
    dispatch({ type: DELETE_COMPANY_FAIL, payload: e });
  }
};

export const editCompany= (data) => async (dispatch) => {
  dispatch({ type: EDIT_COMPANY_REQUEST });

  try {
    await API.put(`/companies/${data.id}`, data);
    dispatch({ type: EDIT_COMPANY_SUCCESS });
    dispatch(fetchCompanies());
  } catch (e) {
    dispatch({ type: EDIT_COMPANY_FAIL, payload: e });
  }
};

export const addCompany= (data) => async (dispatch) => {
  dispatch({ type: ADD_COMPANY_REQUEST });

  try {
    await API.post(`/companies`, data);
    dispatch({ type: ADD_COMPANY_SUCCESS });
    dispatch(fetchCompanies());
  } catch (e) {
    dispatch({ type: ADD_COMPANY_FAIL, payload: e });
  }
};
