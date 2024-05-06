import {
    FETCH_SECONDHANDPRODUCTS_FAIL,
    FETCH_SECONDHANDPRODUCTS_REQUEST,
    FETCH_SECONDHANDPRODUCTS_SUCCESS,
    DELETE_SECONDHANDPRODUCT_FAIL,
    DELETE_SECONDHANDPRODUCT_REQUEST,
    DELETE_SECONDHANDPRODUCT_SUCCESS,
    EDIT_SECONDHANDPRODUCT_REQUEST,
    EDIT_SECONDHANDPRODUCT_SUCCESS,
    EDIT_SECONDHANDPRODUCT_FAIL,
    ADD_SECONDHANDPRODUCT_REQUEST,
    ADD_SECONDHANDPRODUCT_SUCCESS,
    ADD_SECONDHANDPRODUCT_FAIL,
  } from "../constants/index";
  
  export const secondHandProductReducer = (
    state = { secondHandProducts: [], loading: false, error: "" },
    action
  ) => {
    switch (action.type) {
      case FETCH_SECONDHANDPRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case FETCH_SECONDHANDPRODUCTS_SUCCESS:
        return {
          ...state,
          secondHandProducts: action.payload,
          loading: false,
        };
  
      case FETCH_SECONDHANDPRODUCTS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case DELETE_SECONDHANDPRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case DELETE_SECONDHANDPRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case DELETE_SECONDHANDPRODUCT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case EDIT_SECONDHANDPRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case EDIT_SECONDHANDPRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case EDIT_SECONDHANDPRODUCT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
        case ADD_SECONDHANDPRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case ADD_SECONDHANDPRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case ADD_SECONDHANDPRODUCT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
  
      default:
        return state;
    }
  };