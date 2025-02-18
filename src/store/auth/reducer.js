import { getDataFromLocalStorage } from "utils/functions";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "./types";

const initialState = {
  user: getDataFromLocalStorage("user"),
  loading: false,
  message: null,
  access_token: localStorage.getItem("access_token"),
  // refresh_token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, loading: true };
    }
    case LOGIN_SUCCESS:{
      return {
        ...state,
        loading: false,
        message: null,
        // refresh_token: action.payload.refresh_token,
        access_token: action.payload.access_token,
        user: action.payload.user,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
        access_token: null,
        // refresh_token: null,
        message: action.payload.error,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        user: null,
        access_token: null,
        message: null,
      };
    }
    default:
      return state;
  }
};

export const selectAccessToken = (state) => state.auth.access_token;
export const selectUser = (state) => state.auth.user;

export { authReducer };
