import {
    FETCH_LOCATIONS_FAIL,
    FETCH_LOCATIONS_REQUEST,
    FETCH_LOCATIONS_SUCCESS,
    DELETE_LOCATION_FAIL,
    DELETE_LOCATION_REQUEST,
    DELETE_LOCATION_SUCCESS,
    EDIT_LOCATION_REQUEST,
    EDIT_LOCATION_SUCCESS,
    EDIT_LOCATION_FAIL,
    ADD_LOCATION_REQUEST,
    ADD_LOCATION_SUCCESS,
    ADD_LOCATION_FAIL,
  } from "../constants/index";
  
  export const locationReducer = (
    state = { locations: [], loading: false, error: "" },
    action
  ) => {
    switch (action.type) {
      case FETCH_LOCATIONS_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case FETCH_LOCATIONS_SUCCESS:
        return {
          ...state,
          locations: action.payload,
          loading: false,
        };
  
      case FETCH_LOCATIONS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case DELETE_LOCATION_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case DELETE_LOCATION_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case DELETE_LOCATION_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case EDIT_LOCATION_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case EDIT_LOCATION_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case EDIT_LOCATION_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
        case ADD_LOCATION_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case ADD_LOCATION_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case ADD_LOCATION_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
  
      default:
        return state;
    }
  };