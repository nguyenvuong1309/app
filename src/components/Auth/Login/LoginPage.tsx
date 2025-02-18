import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { loginUser } from "../../../store_new/auth/Auth.slice";
import Logo from "../../../logo.svg";
import PATH from "../../../config/path";
import { TYPE_LANDLORD } from "../../../config/constants";

const schema = yup
  .object({
    email: yup.string().email().required("Username is required!"),
    password: yup
      .string()
      .required("Password is required!")
      .min(8, "Password must be at least 8 characters"),
  })
  .required();

export const LoginPage = ({ type }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const formData = {
      ...data,
      account_type: 2,
    };
    try {
      const response = await dispatch(loginUser(formData) as any);
      const payload = response.payload as { success: boolean; message: string };

      if (payload?.success) {
        toast.success(payload?.message);
      } else {
        toast.error(payload?.message);
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <div className="text-center mb-8">
          <img src={Logo} alt="Logo" className="w-20 h-20 mx-auto" />
          <h1 className="text-3xl font-bold text-gray-800 mt-4">
            {type === TYPE_LANDLORD ? "Landlord Portal" : "Tenant Portal"}
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className={`w-full px-4 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="flex justify-between items-center mb-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Sign In
            </button>
            <Link
              to={type === TYPE_LANDLORD ? PATH.SIGN_UP : PATH.TENANT_SIGN_UP}
              className="text-blue-500 hover:underline"
            >
              Register
            </Link>
          </div>
          <div className="text-center">
            <Link
              to={`${PATH.FORGET_PASSWORD}?type=${type}`}
              className="text-red-500 hover:underline"
            >
              Forgot your Password?
            </Link>
          </div>
        </form>
        <div className="flex items-center justify-center space-x-4 mt-8">
          <span className="w-20 h-px bg-gray-300"></span>
          <span className="text-gray-500">or Continue with</span>
          <span className="w-20 h-px bg-gray-300"></span>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none">
            <FaGoogle className="text-red-500 mr-2" />
            <span>Google</span>
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none">
            <FaFacebook className="text-blue-500 mr-2" />
            <span>Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};
