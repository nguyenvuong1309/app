import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLocalStorage } from "../../utils/functions";
import { fetchLoginRT } from "./actions";

const initialState = {
  user: getDataFromLocalStorage("user"),
  loading: false,
  message: null,
  access_token: localStorage.getItem("access_token"),
  // refresh_token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLoginRT.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLoginRT.fulfilled, (state, { payload }) => {
      if (payload) {
        localStorage.setItem("access_token", payload.access_token ?? "");
        localStorage.setItem("user", JSON.stringify(payload.user));
        state.loading = false;
        state.user = payload.user;
        state.message = payload.message;
        state.access_token = payload.access_token;
      }
    });
    builder.addCase(fetchLoginRT.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const selectAccessToken = (state) => state.auth.access_token;
export const selectUser = (state) => state.auth.user;
export const selectIsVerify = (state) => state.auth.isVerify;

export default authSlice.reducer;
