import { yupResolver } from "@hookform/resolvers/yup";
import Icon1 from "../../../../assets/images/login-1.png";
import Logo from "../../../../assets/images/logo.png";
import { TYPE_LANDLORD } from "../../../../config/constants";
import PATH from "../../../../config/path";
import { useForm } from "react-hook-form";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../store";
import { fetchLoginRT } from "../../../../store/auth/actions";
import * as yup from "yup";
import "./style.scss";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const schema = yup
  .object({
    email: yup.string().email().required("Username is required!"),
    password: yup
      .string()
      .required("Password is required!")
      .min(8, "Password must be at least 8 characters"),
  })
  .required();

const LoginMobile = ({ type }) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(fetchLoginRT({ ...data, type: type === TYPE_LANDLORD ? 2 : 3 }));
  };
  return (
    <div className="auth-container-mb login-mb ">
      <div className="login-mb__top">
        <img src={Icon1} alt="" className="icon-1" />
        <Link to="/" className="logo">
          <img src={Logo} alt="" />
          <h1>LUXOASIS</h1>
        </Link>
        <p>Experience Luxury Living. Without breaking the bank</p>
      </div>

      <div className="login-mb__form">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <FaRegUserCircle />
            <input
              type="text"
              name="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </div>
          <div className="form-group">
            <MdLockOutline />
            <input
              type="password"
              name="email"
              placeholder="Password"
              {...register("password")}
            />
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}
          </div>
          <div className="form-action">
            <div className="remember">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <Link to={PATH.FORGET_PASSWORD}>Forgot Password?</Link>
          </div>
          <button type="submit" className="form-btn">
            Login
          </button>
          <div className="form-note">
            Don't have an account?
            <Link
              to={type === TYPE_LANDLORD ? PATH.SIGN_UP : PATH.TENANT_SIGN_UP}
            >
              {" "}
              Create an account
            </Link>
          </div>
          <div className="w-full flex justify-center items-center space-x-4 mt-6">
            <span className="w-20 h-px bg-gray-400"></span>
            <span className="text-gray-500 font-medium">or Continue with</span>
            <span className="w-20 h-px bg-gray-400"></span>
          </div>
          <div className="w-full flex justify-center space-x-4 mt-4">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none">
              <FaGoogle className="text-red-500 mr-2" />
              <span>Google</span>
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none">
              <FaFacebook className="text-blue-500 mr-2" />
              <span>Facebook</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginMobile;
