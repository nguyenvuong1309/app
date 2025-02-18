import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api";

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

export const createOasis = createAsyncThunk(
  "/auth/oasis",

  async (formData: any) => {
    const response = await api.post("/auth/oasis", formData);

    return response.data;
  }
);

export const updateOasis = createAsyncThunk(
  "/oasis/update",
  async (formData: any) => {
    const response = await api.post("/oasis/update", formData);
    return response.data;
  }
);

export const getAllOasis = createAsyncThunk(
  "/oasis/get-all",
  async (formData: any) => {
    const response = await api.post("/oasis/get-all", formData);
    return response.data;
  }
);

export const getOasisById = createAsyncThunk(
  "/oasis/get-by-id",
  async (formData: any) => {
    const response = await api.post("/oasis/get-by-id", formData);
    return response.data;
  }
);

export const deleteOasis = createAsyncThunk(
  "/oasis/delete",
  async (formData: any) => {
    const response = await api.post("/oasis/delete", formData);
    return response.data;
  }
);

const oasisSlice = createSlice({
  name: "oasis",
  initialState,
  reducers: {
    // setUser: (state, action) => {},
    // clearError: (state) => {
    //   state.error = null;
    // },
    // logout: (state) => {
    //   state.isAuthenticated = false;
    //   state.user = null;
    //   state.ACCESS_TOKEN = null;
    //   state.REFRESH_TOKEN = null;
    //   state.error = null;
    //   localStorage.removeItem("oasisState");
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOasis.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOasis.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(createOasis.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(updateOasis.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateOasis.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        // Lưu thông tin user và token
        if (action.payload.data) {
          state.user = action.payload.data.user;
          state.ACCESS_TOKEN = action.payload.data.access_token;
          state.REFRESH_TOKEN = action.payload.data.refresh_token;
          state.isAuthenticated = true;
        }
      })
      .addCase(updateOasis.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;

        // Lưu thông tin lỗi
        state.error = {
          message: action.payload?.message || "Login failed",
          errors: action.payload?.errors,
        };
      })
      .addCase(getAllOasis.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllOasis.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user : null;
        state.isAuthenticated = action.payload.success;
      })
      .addCase(getAllOasis.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(getOasisById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user : null;
        state.isAuthenticated = action.payload.success;
      })
      .addCase(deleteOasis.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.success ? action.payload.user : null;
        state.isAuthenticated = action.payload.success;
      });
  },
});

// export const { setUser, clearError, logout } = oasisSlice.actions;
export default oasisSlice.reducer;
