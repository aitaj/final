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
  
  export const categoryReducer = (
    state = { categories: [], loading: false, error: "" },
    action
  ) => {
    switch (action.type) {
      case FETCH_CATEGORIES_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case FETCH_CATEGORIES_SUCCESS:
        return {
          ...state,
          categories: action.payload,
          loading: false,
        };
  
      case FETCH_CATEGORIES_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case DELETE_CATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case DELETE_CATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case DELETE_CATEGORY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case EDIT_CATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case EDIT_CATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case EDIT_CATEGORY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
        case ADD_CATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case ADD_CATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case ADD_CATEGORY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
  
      default:
        return state;
    }
  };