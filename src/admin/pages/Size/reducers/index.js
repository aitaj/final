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
  
  export const sizeReducer = (
    state = { sizes: [], loading: false, error: "" },
    action
  ) => {
    switch (action.type) {
      case FETCH_SIZES_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case FETCH_SIZES_SUCCESS:
        return {
          ...state,
          sizes: action.payload,
          loading: false,
        };
  
      case FETCH_SIZES_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case DELETE_SIZE_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case DELETE_SIZE_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case DELETE_SIZE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case EDIT_SIZE_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case EDIT_SIZE_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case EDIT_SIZE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
        case ADD_SIZE_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case ADD_SIZE_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case ADD_SIZE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
  
      default:
        return state;
    }
  };