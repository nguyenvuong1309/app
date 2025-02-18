import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import authReducer from "./auth/authSlice";
import tenantAuthReducer from "./tenant-auth/tenantAuthSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    tenantAuth: tenantAuthReducer,
  },
});

export const useAppSelector = useSelector;
export const useAppDispatch = () => useDispatch();

export { store };
