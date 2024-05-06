import {
    FETCH_COLOURS_FAIL,
    FETCH_COLOURS_REQUEST,
    FETCH_COLOURS_SUCCESS,
    DELETE_COLOUR_FAIL,
    DELETE_COLOUR_REQUEST,
    DELETE_COLOUR_SUCCESS,
    EDIT_COLOUR_REQUEST,
    EDIT_COLOUR_SUCCESS,
    EDIT_COLOUR_FAIL,
    ADD_COLOUR_REQUEST,
    ADD_COLOUR_SUCCESS,
    ADD_COLOUR_FAIL,
  } from "../constants/index";
  
  export const colourReducer = (
    state = { colours: [], loading: false, error: "" },
    action
  ) => {
    switch (action.type) {
      case FETCH_COLOURS_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case FETCH_COLOURS_SUCCESS:
        return {
          ...state,
          colours: action.payload,
          loading: false,
        };
  
      case FETCH_COLOURS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case DELETE_COLOUR_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case DELETE_COLOUR_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case DELETE_COLOUR_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case EDIT_COLOUR_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case EDIT_COLOUR_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case EDIT_COLOUR_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
        case ADD_COLOUR_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case ADD_COLOUR_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      case ADD_COLOUR_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
  
      default:
        return state;
    }
  };