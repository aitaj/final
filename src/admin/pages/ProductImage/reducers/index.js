import {
    FETCH_PRODUCTIMAGES_FAIL,
    FETCH_PRODUCTIMAGES_REQUEST,
    FETCH_PRODUCTIMAGES_SUCCESS,
    DELETE_PRODUCTIMAGE_FAIL,
    DELETE_PRODUCTIMAGE_REQUEST,
    DELETE_PRODUCTIMAGE_SUCCESS,
    EDIT_PRODUCTIMAGE_REQUEST,
    EDIT_PRODUCTIMAGE_SUCCESS,
    EDIT_PRODUCTIMAGE_FAIL,
    ADD_PRODUCTIMAGE_REQUEST,
    ADD_PRODUCTIMAGE_SUCCESS,
    ADD_PRODUCTIMAGE_FAIL,
  } from "../constants/index";
  
  export const productImageReducer = (
    state = { productImages: [], loading: false, error: "" },
    action
  ) => {
    switch (action.type) {
      case FETCH_PRODUCTIMAGES_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case FETCH_PRODUCTIMAGES_SUCCESS:
        return {
          ...state,
          productImages: action.payload,
          loading: false,
        };
  
      case FETCH_PRODUCTIMAGES_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case DELETE_PRODUCTIMAGE_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case DELETE_PRODUCTIMAGE_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case DELETE_PRODUCTIMAGE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case EDIT_PRODUCTIMAGE_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case EDIT_PRODUCTIMAGE_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case EDIT_PRODUCTIMAGE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
        case ADD_PRODUCTIMAGE_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case ADD_PRODUCTIMAGE_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case ADD_PRODUCTIMAGE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
  
      default:
        return state;
    }
  };