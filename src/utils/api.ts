import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import { ACCESS_TOKEN } from "./Constants";

const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API + "/api",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});


// Request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // Xử lý response thành công
    const successResponse: AxiosResponse = {
      ...response,
      data: {
        status: "success",
        code: response.status,
        message: response.data.message || "Request successful",
        data: response.data.data,
      },
    };
    return successResponse;
  },
  (error: AxiosError<any>) => {
    const errorResponse: AxiosResponse = {
      ...error.response!,
      data: {
        status: "error",
        code: error.response?.status || 500,
        message: error.response?.data?.message || "Request failed",
        errors: error.response?.data?.errors || [],
      },
    };
    return Promise.resolve(errorResponse);
  }
);

export default api;
