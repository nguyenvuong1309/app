import ForgetPassword from "../components/Auth/ForgetPassword";
import { LoginPage } from "../components/Auth/Login/LoginPage";
import ResetPassword from "../components/Auth/ResetPassword";
import VerifySignUp from "../components/Auth/SignUp/VerifySignUp";
import PATH from "../config/path";
import { HomePage } from "../pages/home/Home";
import Login from "../pages/landlord/Login";
import { LandlordSignUp } from "../pages/landlord/SignUp/SignUp";
import PaymentSettings from "../pages/payment-settings/PaymentSettings";
import { Pricing } from "../pages/pricing/Pricing";
import TenantLogin from "../pages/Tenant/Login";
import TenantSignUp from "../pages/Tenant/SignUp";

export const publicRoutes = [
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
  {
    path: PATH.SIGN_UP,
    element: <LandlordSignUp />,
  },
  {
    path: PATH.FORGET_PASSWORD,
    element: <ForgetPassword />,
  },
  {
    path: PATH.RESET_PASSWORD,
    element: <ResetPassword />,
  },
  {
    path: PATH.VERIFY_SIGN_UP,
    element: <VerifySignUp />,
  },
  {
    path: PATH.TENANT_LOGIN,
    element: <TenantLogin />,
  },
  {
    path: PATH.TENANT_SIGN_UP,
    element: <TenantSignUp />,
  },
  {
    path: PATH.PRICE_PLAN,
    element: <Pricing />,
  },
  {
    path: PATH.PAYMENT_SETTINGS,
    element: <PaymentSettings />,
  },
];
