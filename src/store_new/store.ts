import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/Auth.slice";
import oasisReducer from "./oasis/Oasis.slice";
import formCreateNewOasisReducer from "./oasis/FormCreateNewOasis";
import sidebarReducer from "../redux/reducer/sidebardata";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    oasis: oasisReducer,
    formCreateNewOasis: formCreateNewOasisReducer,
    sidebardata: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
