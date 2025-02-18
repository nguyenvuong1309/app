import { yupResolver } from "@hookform/resolvers/yup";
import { fetchSignUp } from "../../../../apis/auth.api";
import Spinner from "../../../../components/Spinner";
import { PHONE_REGEX, TYPE_LANDLORD } from "../../../../config/constants";
import PATH from "../../../../config/path";
import Logo from "../../../../logo.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import "./style.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useAppDispatch } from "../../../../store_new/hooks";
import { registerUser } from "../../../../store_new/auth/Auth.slice";
import { toast } from "react-toastify";
import { LANDLORD, TENANT } from "../../../../utils";
const schema = yup
  .object({
    first_name: yup
      .string()
      .required("First name is required!")
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name must be less than 50 characters"),

    last_name: yup
      .string()
      .required("Last name is required!")
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name must be less than 50 characters"),

    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required!")
      .max(100, "Email must be less than 100 characters"),

    verify_email: yup
      .string()
      .email("Invalid email format")
      .required("Verify email is required!")
      .oneOf([yup.ref("email")], "Emails must match"),

    phone: yup
      .string()
      .required("Phone is required!")
      .matches(PHONE_REGEX, "Phone number is not valid")
      .min(10, "Phone number must be at least 10 digits")
      .max(15, "Phone number must be less than 15 digits"),

    password: yup
      .string()
      .required("Password is required!")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must include uppercase, lowercase, number, and special character"
      ),

    verify_password: yup
      .string()
      .required("Confirm password is required!")
      .oneOf([yup.ref("password")], "Passwords must match")
      .min(8, "Password must be at least 8 characters"),

    date_of_birth: yup
      .date()
      .nullable()
      .max(new Date(), "Date of birth cannot be in the future")
      .transform((curr, orig) => (orig === "" ? null : curr)),
  })
  .required();

const RegisterDesktop = ({ type }) => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const body = {
      username: data?.first_name + data?.last_name,
      password: data?.password,
      email: data?.email,
      profile_pic: "",
      type: window.location.pathname.includes("tenant") ? TENANT : LANDLORD,
    };
    setIsLoading(true);
    const response = await dispatch(registerUser(body)).unwrap();
    if (response.code === 200 || response.code === 201) {
      navigate({
        pathname: PATH.LANDLORD_VERIFY_SIGN_UP,
        search: `?email=${data.email}&type=${type}`,
      });
    } else if (response.code === 201) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
    setIsLoading(false);
  };

  const auth0Login = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: PATH.HOME,
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  const onRegisterUser = async () => {};

  return (
    <div className="flex justify-center items-center mb-40 w-full flex-col ">
      <div className="auth-container register">
        <div className="register__heading">Sign up</div>
        <div className="register__title">
          <a href="/" className="register__logo">
            <img src={Logo} alt="" />
          </a>
          <h1>Welcome to LuxOasis</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="register__form">
            <div className="register__group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Bob"
                {...register("first_name")}
              />
              {errors.first_name && (
                <div className="flex items-center text-red-500 text-sm mt-1 space-x-2 w-full animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-base font-medium">
                    {errors.first_name.message}
                  </span>
                </div>
              )}
            </div>
            <div className="register__group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="White"
                {...register("last_name")}
              />
              {errors.last_name && (
                <div className="flex items-center text-red-500 text-sm mt-1 space-x-2 w-full animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-base font-medium">
                    {errors.last_name.message}
                  </span>
                </div>
              )}
            </div>
            <div className="register__group">
              <label htmlFor="email">E-Mail Address</label>
              <input
                type="email"
                id="email"
                placeholder="BobWhite@gmail.com"
                {...register("email")}
              />
              {errors.email && (
                <div className="flex items-center text-red-500 text-sm mt-1 space-x-2 w-full animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-base font-medium">
                    {errors.email.message}
                  </span>
                </div>
              )}
            </div>
            <div className="register__group">
              <label htmlFor="verifyEmail">Verify E-Mail Address</label>
              <input
                type="email"
                id="verifyEmail"
                placeholder="BobWhite@gmail.com"
                {...register("verify_email")}
              />
              {errors.verify_email && (
                <div className="flex items-center text-red-500 text-sm mt-1 space-x-2 w-full animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-base font-medium">
                    {errors.verify_email.message}
                  </span>
                </div>
              )}
            </div>
            <div className="register__group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                placeholder="780-123-4567"
                {...register("phone")}
              />
              {errors.phone && (
                <div className="flex items-center text-red-500 text-sm mt-1 space-x-2 w-full animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-base font-medium">
                    {errors.phone.message}
                  </span>
                </div>
              )}
            </div>
            <div className="register__group">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                id="dateOfBirth"
                {...register("date_of_birth")}
              />
              {errors.date_of_birth && (
                <div className="flex items-center text-red-500 text-sm mt-1 space-x-2 w-full animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-base font-medium">
                    {errors.date_of_birth.message}
                  </span>
                </div>
              )}
            </div>
            <div className="register__group register__group--full">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="*********"
                {...register("password")}
              />
              {errors.password && (
                <div className="flex items-center text-red-500 text-sm mt-1 space-x-2 w-full animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-base font-medium">
                    {errors.password.message}
                  </span>
                </div>
              )}
            </div>
            <div className="register__group register__group--full">
              <label htmlFor="verifyPassword">Verify Password</label>
              <input
                type="password"
                id="verifyPassword"
                placeholder="*********"
                {...register("verify_password")}
              />
              {errors.verify_password && (
                <div className="flex items-center text-red-500 text-sm mt-1 space-x-2 w-full animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-base font-medium">
                    {errors.verify_password.message}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="register__button flex justify-center space-x-4">
            <button
              type="submit"
              className="
                bg-[#127782] 
                text-white 
                text-2xl 
                px-8 
                py-3 
                rounded-full 
                transition 
                duration-300 
                ease-in-out 
                hover:bg-[#0E5F69] 
                active:scale-95 
                focus:outline-none 
                focus:ring-4 
                focus:ring-[#127782]/50
              "
            >
              {isLoading ? <Spinner /> : "Next"}
            </button>

            <Link
              to={type === TYPE_LANDLORD ? PATH.LOGIN : PATH.TENANT_LOGIN}
              className="
                bg-gray-300 
                text-gray-700 
                text-2xl 
                px-8 
                py-3 
                rounded-full 
                transition 
                duration-300 
                ease-in-out 
                hover:bg-gray-400 
                active:scale-95 
                focus:outline-none 
                focus:ring-4 
                focus:ring-gray-300/50
              "
            >
              {isLoading ? <Spinner /> : "Cancel"}
            </Link>
          </div>
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
              className="w-60 flex items-center p-3  border-[4px] border-opacity-60 border-[#666] rounded-full hover:bg-gray-100 hover:text-opacity-100 focus:outline-none"
            >
              <FaFacebook className="text-blue-500 mr-2 text-5xl" />
              <span className="text-3xl text-[#127783] text-opacity-50">
                Facebook
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterDesktop;
