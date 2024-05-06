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
  
  export const companyReducer = (
    state = { companies: [], loading: false, error: "" },
    action
  ) => {
    switch (action.type) {
      case FETCH_COMPANIES_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case FETCH_COMPANIES_SUCCESS:
        return {
          ...state,
          companies: action.payload,
          loading: false,
        };
  
      case FETCH_COMPANIES_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case DELETE_COMPANY_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case DELETE_COMPANY_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case DELETE_COMPANY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case EDIT_COMPANY_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case EDIT_COMPANY_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case EDIT_COMPANY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
        case ADD_COMPANY_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case ADD_COMPANY_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case ADD_COMPANY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
  
      default:
        return state;
    }
  };