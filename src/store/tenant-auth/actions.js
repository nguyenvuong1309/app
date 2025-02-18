import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTenantLogin } from "../../apis/auth.api";
import { toast } from "react-toastify";

export const fetchTenantLoginRT = createAsyncThunk(
  "tenant/login",
  async (loginData, { rejectWithValue }) => {
    const res = await fetchTenantLogin(loginData);

    if (!res.success) {
      return rejectWithValue(res.message);
    }

    toast.success(res.message, {
      theme: "colored",
    });

    return res.data;
  }
);
