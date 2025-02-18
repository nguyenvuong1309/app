import { yupResolver } from "@hookform/resolvers/yup";
import { fetchResetPassword } from "../../../../apis/auth.api";
import { TYPE_LANDLORD } from "../../../../config/constants";
import PATH from "../../../../config/path";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import * as yup from "yup";
import "../style.scss";
import axios from "axios";

const schema = yup
  .object({
    password: yup.string().required("Password is required!"),
    verify_password: yup.string().required("Verify password is required!"),
  })
  .required();

const ResetPasswordForm = ({ setIsResetPassword }) => {
  const [searchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const url = window.location.href;
    const token = url.split("/").pop();
    const response = await axios.post(
      process.env.REACT_APP_BACKEND_API + "/api/auth/password_reset/confirm/",
      {
        token: token,
        password: data.password,
      }
    );
    if (response.data) {
      setIsResetPassword(true);
    }
  };

  return (
    //    <div className="auth-container reset-password">
    //   <h1>Reset Account Password</h1>
    //   <form
    //     action=""
    //     className="reset-password__form"
    //     onSubmit={handleSubmit(onSubmit)}
    //   >
    //     <h2>Enter a new password</h2>
    //     <input
    //       type="password"
    //       id="password"
    //       placeholder="Password"
    //       {...register("password")}
    //     />
    //     {errors.password && (
    //       <span className="error">{errors.password.message}</span>
    //     )}
    //     <input
    //       type="password"
    //       id="email"
    //       placeholder="Re-enter Password"
    //       {...register("verify_password")}
    //     />
    //     {errors.verify_password && (
    //       <span className="error">{errors.verify_password.message}</span>
    //     )}
    //     <div className="reset-password__button">
    //       <button className="lux-btn lux-btn-primary">Submit</button>
    //       <button className="lux-btn lux-btn-secondary">Back</button>
    //     </div>
    //   </form>
    // </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md transform transition-all hover:shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Reset Password</h1>
          <p className="mt-2 text-sm text-gray-600">
            Please enter your new password below
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <div className="mt-1 relative">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter new password"
                  {...register("password")}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md 
                    shadow-sm placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                    transition-all duration-200 ease-in-out
                    hover:border-teal-400"
                />
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600 animate-shake">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="verify_password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <input
                  type="password"
                  id="verify_password"
                  placeholder="Re-enter password"
                  {...register("verify_password")}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md
                    shadow-sm placeholder-gray-400  
                    focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                    transition-all duration-200 ease-in-out
                    hover:border-teal-400"
                />
                {errors.verify_password && (
                  <p className="mt-2 text-sm text-red-600 animate-shake">
                    {errors.verify_password.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 justify-center py-2 px-4 border border-transparent rounded-md
                shadow-sm text-sm font-medium text-white bg-teal-600 
                hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500
                transform transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Reset Password
            </button>
            <button
              type="button"
              onClick={() => history.back()}
              className="flex-1 justify-center py-2 px-4 border border-gray-300 rounded-md
                shadow-sm text-sm font-medium text-gray-700 bg-white
                hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500
                transform transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ResetPasswordSend = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  return (
    //  <div className="auth-container reset-send">
    //   <h1>Password Reset successful</h1>
    //   <p>
    //     Password has been successfully changed. Please return to the log in
    //     screen.
    //   </p>
    //   <Link
    //     to={type === TYPE_LANDLORD ? PATH.LOGIN : PATH.TENANT_LOGIN}
    //     className="lux-btn lux-btn-primary"
    //   >
    //     Return to Log In
    //   </Link>
    // </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md transform transition-all hover:shadow-xl">
        <div className="flex flex-col items-center space-y-4">
          {/* Success Icon with Animation */}
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <svg
              className="w-10 h-10 text-green-500 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 bg-green-100 whitespace-nowrap">
            Password Reset Successful!
          </h1>

          <p className="text-gray-600 text-center max-w-sm">
            Your password has been successfully changed. Please return to the
            login screen to access your account.
          </p>

          <Link
            to={type === TYPE_LANDLORD ? PATH.LOGIN : PATH.TENANT_LOGIN}
            className="mt-6 w-full max-w-[200px] flex justify-center py-3 px-4 
              border border-transparent rounded-md shadow-sm text-sm font-medium 
              text-white bg-teal-600 hover:bg-teal-700 
              transform transition duration-200 hover:scale-105 active:scale-95
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Return to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

const ResetPasswordDesktop = () => {
  const [isResetPassword, setIsResetPassword] = useState(false);

  return isResetPassword ? (
    <ResetPasswordSend />
  ) : (
    <ResetPasswordForm setIsResetPassword={setIsResetPassword} />
  );
};

export default ResetPasswordDesktop;
