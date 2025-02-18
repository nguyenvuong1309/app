import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchLogin, fetchTenantLogin } from "../../apis/auth.api";
import { HTTP_STATUS_CODE } from "../../config/constants";
import { toast } from "react-toastify";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./types";

export const login = (loginData: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const { data, status, message }: any = await fetchLogin(loginData);

    if (status === HTTP_STATUS_CODE.OK && data) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("access_token", data.access_token ?? "");
      localStorage.setItem("user", JSON.stringify(data.user));
    } else if (message) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: {
          error: message,
        },
      });
    }
  };
};

export const fetchLoginRT = createAsyncThunk(
  "auth/login",
  async (loginData, { rejectWithValue }) => {
    const res = await fetchLogin(loginData);

    if (!res.data.success) {
      return rejectWithValue(res.data.message);
    }

    if (!res.data.is_verify) {
      toast.info(res.data.message, {
        theme: "colored",
      });
    } else {
      toast.success(res.data.message, {
        theme: "colored",
      });
    }

    return res.data;
  }
);
