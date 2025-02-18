import { yupResolver } from "@hookform/resolvers/yup";
import { fetchResetPassword } from "../../../../apis/auth.api";
import HeaderMb from "../../../../components/HeaderMb";
import { TYPE_LANDLORD } from "../../../../config/constants";
import PATH from "../../../../config/path";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import * as yup from "yup";
import "../style.scss";

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
    const response = await fetchResetPassword({
      ...data,
      uidb64: searchParams.get("uidb64"),
      token: searchParams.get("token"),
    });

    if (response.data) {
      setIsResetPassword(true);
    }
  };

  return (
    <div className="auth-container-mb reset-password">
      <HeaderMb title="Reset Account Password" />
      <div className="reset-password__form">
        <h2>Reset Account Password</h2>
        <p>Enter a new password</p>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <span className="error">{errors.password.message}</span>
          )}
          <input
            type="password"
            id="email"
            placeholder="Re-enter Password"
            {...register("verify_password")}
          />
          {errors.verify_password && (
            <span className="error">{errors.verify_password.message}</span>
          )}
          <div className="reset-password__button">
            <button className="lux-btn lux-btn-primary">Submit</button>
            <button className="lux-btn lux-btn-secondary">Back</button>
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
    <div className="auth-container-mb reset-send">
      <HeaderMb title="Reset Account Password" />

      <div className="reset-send__message">
        <h2>Password Reset successful</h2>
        <p>
          Password has been successfully changed. Please return to the log in
          screen.
        </p>
        <Link
          to={type === TYPE_LANDLORD ? PATH.LOGIN : PATH.TENANT_LOGIN}
          className="lux-btn lux-btn-primary"
        >
          Return to Log In
        </Link>
      </div>
    </div>
  );
};

const ResetPasswordMobile = () => {
  const [isResetPassword, setIsResetPassword] = useState(false);

  return isResetPassword ? (
    <ResetPasswordSend />
  ) : (
    <ResetPasswordForm setIsResetPassword={setIsResetPassword} />
  );
};

export default ResetPasswordMobile;
