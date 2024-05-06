import {
    FETCH_MATERIALS_FAIL,
    FETCH_MATERIALS_REQUEST,
    FETCH_MATERIALS_SUCCESS,
    DELETE_MATERIAL_FAIL,
    DELETE_MATERIAL_REQUEST,
    DELETE_MATERIAL_SUCCESS,
    EDIT_MATERIAL_REQUEST,
    EDIT_MATERIAL_SUCCESS,
    EDIT_MATERIAL_FAIL,
    ADD_MATERIAL_REQUEST,
    ADD_MATERIAL_SUCCESS,
    ADD_MATERIAL_FAIL,
  } from "../constants/index";
  
  export const materialReducer = (
    state = { materials: [], loading: false, error: "" },
    action
  ) => {
    switch (action.type) {
      case FETCH_MATERIALS_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case FETCH_MATERIALS_SUCCESS:
        return {
          ...state,
          materials: action.payload,
          loading: false,
        };
  
      case FETCH_MATERIALS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case DELETE_MATERIAL_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case DELETE_MATERIAL_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case DELETE_MATERIAL_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case EDIT_MATERIAL_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case EDIT_MATERIAL_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case EDIT_MATERIAL_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
        case ADD_MATERIAL_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case ADD_MATERIAL_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case ADD_MATERIAL_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
  
      default:
        return state;
    }
  };