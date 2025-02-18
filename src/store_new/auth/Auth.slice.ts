import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../../utils";

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: any;
  ACCESS_TOKEN: string | null;
  REFRESH_TOKEN: string | null;
  error: {
    message: string;
    errors?: Array<{
      field: string;
      error: string;
    }>;
  } | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
  ACCESS_TOKEN: null,
  REFRESH_TOKEN: null,
  error: null,
};

export const registerUser = createAsyncThunk(
  "/auth/register",

  async (formData: any) => {
    const response = await api.post("/auth/signup/", formData);

    return response.data;
  }
);

export const loginUser = createAsyncThunk(
  "/auth/login",
  async (formData: any) => {
    const response = await api.post("/auth/login/", formData);
    return response.data;
  }
);

export const logoutUser = createAsyncThunk(
  "/auth/logout",

  async () => {
    const response = await api.post("/auth/logout");

    return response.data;
  }
);

export const checkAuth = createAsyncThunk(
  "/auth/checkauth",

  async () => {
    const response = await api.get("/auth/check-auth");

    return response.data;
  }
);

export const refreshToken = createAsyncThunk("/token/refresh", async () => {
  const response = await api.post("/token/refresh");
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.ACCESS_TOKEN = null;
      state.REFRESH_TOKEN = null;
      state.error = null;
      // Xóa dữ liệu từ localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        // Lưu thông tin user và token
        if (action.payload.data) {
          state.user = action.payload.data.user;
          state.ACCESS_TOKEN = action.payload.data.access_token;
          state.REFRESH_TOKEN = action.payload.data.refresh_token;
          state.isAuthenticated = true;

          // // Lưu vào localStorage
          localStorage.setItem(
            "user",
            JSON.stringify(action.payload.data.user)
          );
          localStorage.setItem(ACCESS_TOKEN, action.payload.data.access_token);
          localStorage.setItem(
            REFRESH_TOKEN,
            action.payload.data.refresh_token
          );
        }
      })
      .addCase(loginUser.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;

        // Lưu thông tin lỗi
        state.error = {
          message: action.payload?.message || "Login failed",
          errors: action.payload?.errors,
        };
      })
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user : null;
        state.isAuthenticated = action.payload.success;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.ACCESS_TOKEN = action.payload.data.access_token;
        state.REFRESH_TOKEN = action.payload.data.refresh_token;
      });
  },
});

export const { setUser, clearError, logout } = authSlice.actions;
export default authSlice.reducer;
