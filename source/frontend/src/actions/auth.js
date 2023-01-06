import axios from "axios";
import { createMessages, returnErrors } from "./messages";

import {
  AUTH_ERROR,
  EDIT_PROFILE_FAIL,
  EDIT_PROFILE_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  PASSWORD_RESET,
  PASSWORD_RESET_CONFIRM,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  RESET_FAIL,
  USER_LOADED,
  USER_LOADING,
} from "./types";

export const loadUser = () => async (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  try {
    const res = await axios.get("/api/auth/user", tokenConfig(getState));
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const login = (username, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post("/api/auth/login", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data,
    });
  }
};

export const logout = () => async (dispatch, getState) => {
  try {
    const res = await axios.post(
      "/api/auth/logout/",
      null,
      tokenConfig(getState)
    );
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
};

export const register =
  ({ username, password, email, profile }) =>
  async (dispatch) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request Body
    const body = JSON.stringify({ username, email, password, profile });

    try {
      const res = await axios.post("/api/auth/register", body, config);
      dispatch(createMessages({ verifyEmail: "Please verify your email." }));
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

export const editProfile =
  ({ username, password, email, profile }) =>
  async (dispatch) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request Body
    const body = JSON.stringify({ username, email, password, profile });

    try {
      const res = await axios.put("/api/auth/register", body, config);
      dispatch(createMessages({ verifyEmail: "Please verify your email." }));
      dispatch({
        type: EDIT_PROFILE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: EDIT_PROFILE_FAIL,
      });
    }
  };

export const resetPassword = (email) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email });

  try {
    const res = await axios.post("/api/auth/reset-pass", body, config);
    dispatch(createMessages({ otpSent: "OTP sent to your email." }));
    dispatch({
      type: PASSWORD_RESET,
      payload: res.data,
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({
      type: RESET_FAIL,
      payload: err.response.data,
    });
  }
};

export const resetConfirm = (username, otp, newPass) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, otp, newPass });
  console.log(body);

  try {
    const res = await axios.post("/api/auth/resetpassconfirm", body, config);
    dispatch(
      createMessages({ passwordReset: "Your password has been reset." })
    );
    dispatch({
      type: PASSWORD_RESET_CONFIRM,
      payload: res.data,
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
    dispatch({
      type: RESET_FAIL,
      payload: err.response.data,
    });
  }
};

export const tokenConfig = (getState) => {
  console.log({ function: typeof getState });
  const token = getState()?.auth.token;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
