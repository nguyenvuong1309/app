import { yupResolver } from "@hookform/resolvers/yup";
import { fetchSignUp } from "../../../../apis/auth.api";
import HeaderMb from "../../../../components/HeaderMb";
import Spinner from "../../../../components/Spinner";
import PATH from "../../../../config/path";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import "./style.scss";
import { TYPE_LANDLORD } from "../../../../config/constants";

const schema = yup
  .object({
    first_name: yup.string().required("First name is required!"),
    last_name: yup.string().required("Last name is required!"),
    email: yup.string().email().required("Email is required!"),
    password: yup
      .string()
      .required("Password is required!")
      .min(8, "Password must be at least 8 characters"),
    verify_password: yup
      .string()
      .required("Password is required!")
      .min(8, "Password must be at least 8 characters"),
  })
  .required();

const SignUpMb = ({ type }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    data["account_type"] = type === TYPE_LANDLORD ? 2 : 3;
    data["verify_email"] = data["email"];
    const response = await fetchSignUp(data);

    if (response.data) {
      navigate({
        pathname: PATH.VERIFY_SIGN_UP,
        search: `?email=${data.email}&type=${type}`,
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="signup-mb auth-container-mb">
      <HeaderMb title="CREATE YOUR ACCOUNT" />
      <div className="signup-mb__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input type="email" placeholder="Email" {...register("email")} />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Full Name"
              {...register("first_name")}
            />
            {errors.first_name && (
              <span className="error">{errors.first_name.message}</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              {...register("last_name")}
            />
            {errors.last_name && (
              <span className="error">{errors.last_name.message}</span>
            )}
          </div>
          <div className="form-group form-group--password">
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <AiFillEyeInvisible />
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}
          </div>
          <div className="form-group form-group--password">
            <input
              type="password"
              placeholder="Repeat Password"
              {...register("verify_password")}
            />
            <AiFillEyeInvisible />
            {errors.verify_password && (
              <span className="error">{errors.verify_password.message}</span>
            )}
          </div>
          <div className="form-btn">
            <button type="submit" className="lux-btn lux-btn-primary">
              {isLoading ? <Spinner /> : "Create Account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpMb;
