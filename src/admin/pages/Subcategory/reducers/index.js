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
  
  export const subcategoryReducer = (
    state = { subcategories: [], loading: false, error: "" },
    action
  ) => {
    switch (action.type) {
      case FETCH_SUBCATEGORIES_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case FETCH_SUBCATEGORIES_SUCCESS:
        return {
          ...state,
          subcategories: action.payload,
          loading: false,
        };
  
      case FETCH_SUBCATEGORIES_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case DELETE_SUBCATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case DELETE_SUBCATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case DELETE_SUBCATEGORY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case EDIT_SUBCATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case EDIT_SUBCATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case EDIT_SUBCATEGORY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
        case ADD_SUBCATEGORY_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case ADD_SUBCATEGORY_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case ADD_SUBCATEGORY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
  
      default:
        return state;
    }
  };