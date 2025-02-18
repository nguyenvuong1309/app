import { yupResolver } from "@hookform/resolvers/yup";
import { TYPE_LANDLORD, TYPE_TENANT } from "../../../../config/constants";
import PATH from "../../../../config/path";
import Logo from "../../../../logo.svg";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../store_new/hooks";
import { fetchLoginRT } from "../../../../store/auth/actions";
import * as yup from "yup";
import "./style.scss";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";
import { loginUser } from "../../../../store_new/auth/Auth.slice";
import {
  ACCESS_TOKEN,
  LANDLORD,
  REFRESH_TOKEN,
  TENANT,
  USER,
} from "../../../../utils";

const schema = yup
  .object({
    email: yup.string().email().required("Username is required!"),
    password: yup
      .string()
      .required("Password is required!")
      .min(1, "Password must be at least 8 characters"),
  })
  .required();

export const LoginDesktop = ({ type }: any) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loginWithRedirect, logout } = useAuth0();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const formData = {
        ...data,
        type: type === TYPE_LANDLORD ? LANDLORD : TENANT,
      };

      const response = await dispatch(loginUser(formData)).unwrap();
      if (response.status === "success") {
        navigate("/");
        localStorage.setItem(USER, JSON.stringify(response.data.user));
        localStorage.setItem(ACCESS_TOKEN, response.data.access_token);
        localStorage.setItem(REFRESH_TOKEN, response.data.refresh_token);
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error: any) {
      console.log("🚀 ~ onSubmit ~ error:", error);
      const errorMessage = error.data?.message;
      toast.error(errorMessage);
    }
  };

  const auth0Login = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: PATH.PROFILE,
        type: window.location.pathname.includes("tenant")
          ? TYPE_TENANT
          : TYPE_LANDLORD,
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  const auth0Logout = async () => {
    await logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <div className="auth-container login mb-40 w-full">
      <div className="login__heading">Login</div>
      <div className="login__title">
        <a href="/" className="login__logo">
          <img src={Logo} alt="" />
        </a>
        <h1>{type === TYPE_LANDLORD ? "Landlord Portal" : "Tenant Portal"}</h1>
      </div>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="login__group flex justify-center items-center">
          <input
            type="text"
            placeholder="Username"
            className={`
              login__input 
              w-[600px] 
              px-4 
              py-3 
              border-2 
              rounded-xl 
              shadow-sm 
              transition 
              duration-300 
              ease-in-out
              focus:outline-none 
              focus:ring-4 
              focus:border-transparent 
              ${
                errors.email
                  ? "border-red-500 text-red-700 focus:ring-red-200"
                  : "border-[#55C8BD] text-gray-700 focus:ring-[#55C8BD]/30 hover:border-[#55C8BD]"
              }
              placeholder-gray-400
              group
            `}
            {...register("email")}
          />
        </div>
        {errors.email && (
          <div className="flex items-center text-red-500 text-sm mt-2 space-x-2 w-[600px] mx-auto animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span className="text-base font-medium">
              {errors.email.message}
            </span>
          </div>
        )}
        <div className="login__group flex justify-center items-center mt-4">
          <input
            type="password"
            placeholder="Password"
            className={`
              login__input 
              w-[600px] 
              px-4 
              py-3 
              border-2 
              rounded-xl 
              shadow-sm 
              transition 
              duration-300 
              ease-in-out
              focus:outline-none 
              focus:ring-4 
              focus:border-transparent 
              ${
                errors.password
                  ? "border-red-500 text-red-700 focus:ring-red-200"
                  : "border-[#55C8BD] text-gray-700 focus:ring-[#55C8BD]/30 hover:border-[#55C8BD]"
              }
              placeholder-gray-400
              group
            `}
            {...register("password")}
          />
        </div>
        {errors.password && (
          <div className="flex items-center text-red-500 text-sm mt-2 space-x-2 w-[600px] mx-auto animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span className="text-base font-medium">
              {errors.password.message}
            </span>
          </div>
        )}
        <div className="login__button">
          <button
            className="bg-[#127782] text-white text-2xl px-8 py-3 rounded-full"
            type="submit"
          >
            Sign In
          </button>
          <Link
            to={type === TYPE_LANDLORD ? PATH.SIGN_UP : PATH.TENANT_SIGN_UP}
            className="bg-[#127782] text-white text-2xl px-8 py-3 rounded-full"
          >
            Register
          </Link>
        </div>
        <Link
          to={`${PATH.FORGET_PASSWORD}?type=${type}`}
          className="login__forgot"
        >
          Forgot your Password?
        </Link>
      </form>
      <div className="w-full flex justify-center items-center space-x-4 mt-6">
        <span className="w-20 h-px bg-gray-400"></span>
        <span className="text-gray-500 text-3xl">or Continue with</span>
        <span className="w-20 h-px bg-gray-400"></span>
      </div>
      <div className="w-full flex justify-center space-x-4 mt-4">
        <button
          onClick={auth0Login}
          className="w-60 flex items-center p-3 border-[4px] border-opacity-60 border-[#666] rounded-full hover:bg-gray-100 hover:text-opacity-100 focus:outline-none"
        >
          <FaGoogle className="text-red-500 mr-2 text-5xl" />
          <span className="text-3xl text-[#127783] text-opacity-50">
            Google
          </span>
        </button>
        <button
          onClick={auth0Login}
          className="w-60 flex items-center p-3 border-[4px] border-opacity-60 border-[#666] rounded-full hover:bg-gray-100 hover:text-opacity-100 focus:outline-none"
        >
          <FaFacebook className="text-blue-500 mr-2 text-5xl" />
          <span className="text-3xl text-[#127783] text-opacity-50">
            Facebook
          </span>
        </button>
      </div>
    </div>
  );
};
