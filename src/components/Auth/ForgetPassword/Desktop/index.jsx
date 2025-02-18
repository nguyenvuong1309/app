import { yupResolver } from "@hookform/resolvers/yup";
import { fetchForgetPassword } from "../../../../apis/auth.api";
import SendIcon from "../../../../assets/images/send-icon.png";
import { TYPE_LANDLORD } from "../../../../config/constants";
import PATH from "../../../../config/path";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import * as yup from "yup";
import "./style.scss";
import axios from "axios";

const schema = yup
  .object({
    email: yup.string().email().required("Email is required!"),
  })
  .required();

const ForgetPasswordForm = ({ type, setIsSendMail }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const response = await axios.post(
      process.env.REACT_APP_BACKEND_API + "/api/auth/password_reset/",
      {
        email: data.email,
      }
    );
    // const response = await fetchForgetPassword({
    //   ...data,
    //   type: type === TYPE_LANDLORD ? 2 : 3,
    // });

    if (response.data) {
      setIsSendMail(true);
    }
  };

  return (
    //  <div className="auth-container forget-password">
    //   <h1>Reset or Forgot Password</h1>
    //   <form
    //     action=""
    //     className="forget-password__form"
    //     onSubmit={handleSubmit(onSubmit)}
    //   >
    //     <label htmlFor="email">Email</label>
    //     <input
    //       type="email"
    //       id="email"
    //       placeholder="Email Address"
    //       {...register("email")}
    //     />
    //     {errors.email && <span className="error">{errors.email.message}</span>}
    //     <div className="forget-password__button">
    //       <button className="lux-btn lux-btn-primary" type="submit">
    //         Submit
    //       </button>
    //       <Link
    //         to={type === TYPE_LANDLORD ? PATH.LOGIN : PATH.TENANT_LOGIN}
    //         className="lux-btn lux-btn-secondary"
    //       >
    //         Cancel
    //       </Link>
    //     </div>
    //   </form>
    // </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Reset Password
          </h1>
          <p className="text-sm text-gray-600">
            Enter your email address to reset your password
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <div className="mt-1">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                {...register("email")}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white
              bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Reset Password
            </button>
            <Link
              to={type === TYPE_LANDLORD ? PATH.LOGIN : PATH.TENANT_LOGIN}
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700
              bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

const ForgetPasswordSend = ({ type }) => {
  return (
    // <div className="auth-container forget-send">
    //   <img src={SendIcon} alt="" />
    //   <h1>Password Reset Sent !</h1>
    //   <p>A link will be sent to this email if the account exists.</p>
    //   <Link
    //     to={type === TYPE_LANDLORD ? PATH.LOGIN : PATH.TENANT_LOGIN}
    //     className="lux-btn lux-btn-primary"
    //   >
    //     Done
    //   </Link>
    // </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md text-center">
        <div className="flex flex-col items-center space-y-4">
          {/* Animation container */}
          <div className="w-24 h-24 mb-4 relative animate-bounce">
            <img
              src={SendIcon}
              alt="Email sent"
              className="w-full h-full object-contain"
            />
            {/* Add subtle pulse effect */}
            <div className="absolute inset-0 bg-teal-500 rounded-full opacity-20 animate-ping" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Password Reset Sent!
          </h1>

          <p className="text-gray-600 max-w-sm">
            A link will be sent to this email if the account exists. Please
            check your inbox.
          </p>

          <Link
            to={type === TYPE_LANDLORD ? PATH.LOGIN : PATH.TENANT_LOGIN}
            className="mt-6 w-full max-w-[200px] flex justify-center py-3 px-4 
              border border-transparent rounded-md shadow-sm text-sm font-medium 
              text-white bg-teal-600 hover:bg-teal-700 
              transform transition duration-200 hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

const ForgetPasswordDesktop = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const [isSendMail, setIsSendMail] = useState(false);

  return isSendMail ? (
    <ForgetPasswordSend type={type} />
  ) : (
    <ForgetPasswordForm type={type} setIsSendMail={setIsSendMail} />
  );
};

export default ForgetPasswordDesktop;
