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
  
  export const brendReducer = (
    state = { brends: [], loading: false, error: "" },
    action
  ) => {
    switch (action.type) {
      case FETCH_BRENDS_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case FETCH_BRENDS_SUCCESS:
        return {
          ...state,
          brends: action.payload,
          loading: false,
        };
  
      case FETCH_BRENDS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case DELETE_BREND_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case DELETE_BREND_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case DELETE_BREND_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case EDIT_BREND_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case EDIT_BREND_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case EDIT_BREND_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
        case ADD_BREND_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case ADD_BREND_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case ADD_BREND_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
  
      default:
        return state;
    }
  };