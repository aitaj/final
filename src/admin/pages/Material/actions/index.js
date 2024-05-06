import API from "../../../api/index";
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

export const fetchMaterials = () => async (dispatch) => {
  dispatch({ type: FETCH_MATERIALS_REQUEST });

  try {
    const { data } = await API.get("/materials");
    dispatch({ type: FETCH_MATERIALS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_MATERIALS_FAIL, payload: error });
  }
};

export const deleteMaterial = (id) => async (dispatch) => {
  dispatch({ type: DELETE_MATERIAL_REQUEST });

  try {
    await API.delete(`/materials/${id}`);
    dispatch({ type: DELETE_MATERIAL_SUCCESS });
    dispatch(fetchMaterials());
  } catch (e) {
    dispatch({ type: DELETE_MATERIAL_FAIL, payload: e });
  }
};

export const editMaterial= (data) => async (dispatch) => {
  dispatch({ type: EDIT_MATERIAL_REQUEST });

  try {
    await API.put(`/materials/${data.id}`, data);
    dispatch({ type: EDIT_MATERIAL_SUCCESS });
    dispatch(fetchMaterials());
  } catch (e) {
    dispatch({ type: EDIT_MATERIAL_FAIL, payload: e });
  }
};

export const addMaterial = (data) => async (dispatch) => {
  dispatch({ type: ADD_MATERIAL_REQUEST });

  try {
    await API.post(`/materials`, data);
    dispatch({ type: ADD_MATERIAL_SUCCESS });
    dispatch(fetchMaterials());
  } catch (e) {
    dispatch({ type: ADD_MATERIAL_FAIL, payload: e });
  }
};
