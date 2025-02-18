import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLocalStorage } from "../../utils/functions";
import { fetchTenantLoginRT } from "./actions";

const initialState = {
  user: getDataFromLocalStorage("user"),
  loading: false,
  message: null,
  access_token: localStorage.getItem("access_token"),
  // refresh_token: null,
};

const tenantAuthSlice = createSlice({
  name: "tenant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTenantLoginRT.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTenantLoginRT.fulfilled, (state, { payload }) => {
      if (payload) {
        localStorage.setItem("tenant_access_token", payload.access_token ?? "");
        localStorage.setItem("tenant", JSON.stringify(payload.user));
        state.loading = false;
        state.user = payload.user;
        state.message = payload.message;
        state.access_token = payload.access_token;
      }
    });
    builder.addCase(fetchTenantLoginRT.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const selectAccessToken = (state) => state.auth.access_token;
export const selectUser = (state) => state.auth.user;

export default tenantAuthSlice.reducer;
