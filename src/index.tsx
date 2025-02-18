// @ts-nocheck
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store_new";
import { ModalProvider } from "./contexts/ModalContext";
import { Auth0ProviderWithHistory } from "./contexts";
import { ThemeProvider } from "./components/layout/components/ThemeProvider";
import { ToastContainer } from "react-toastify";
import { Layout } from "./components/layout/Layout";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/layout/components/AppSidebar";
import { ModeToggle } from "./components/layout/components/ModeToogle";
import { HomePage } from "./pages/home/Home";
import { ProtectedRoute } from "./routes/protectedRoutes";
import { AuthProvider } from "./contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();

root.render(
  <Provider store={store}>
    <SidebarProvider>
      <AuthProvider>
        <ModalProvider>
          <QueryClientProvider client={queryClient}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <ToastContainer />
                <Auth0ProviderWithHistory>
                  <App />
                </Auth0ProviderWithHistory>
              </ThemeProvider>
            </LocalizationProvider>
          </QueryClientProvider>
        </ModalProvider>
      </AuthProvider>
    </SidebarProvider>
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
