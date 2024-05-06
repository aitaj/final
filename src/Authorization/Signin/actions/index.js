import API from "../api";
import { LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS } from "../constants";

export const loginUser = (user) => async (dispatch) => {
  dispatch({ type: LOGIN_USER });

  try {
    const { data } = await API.post("/login", user);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message,
    });
  }
};
