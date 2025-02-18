import { yupResolver } from "@hookform/resolvers/yup";
import { fetchForgetPassword } from "../../../../apis/auth.api";
import LockIcon from "../../../../assets/icons/LockIcon";
import SendIcon from "../../../../assets/images/send-icon.png";
import HeaderMb from "../../../../components/HeaderMb";
import ReturnLogin from "../../../../components/ReturnLogin";
import { TYPE_LANDLORD } from "../../../../config/constants";
import PATH from "../../../../config/path";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import * as yup from "yup";
import "./style.scss";

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
    const response = await fetchForgetPassword({
      ...data,
      type: type === TYPE_LANDLORD ? 2 : 3,
    });

    if (response.data) {
      setIsSendMail(true);
    }
  };

  return (
    <div className="auth-container-mb forget-password-mb">
      <HeaderMb title="Forgot Password" />
      <div className="forget-password-mb__form">
        <LockIcon />
        <h2>Trouble Logging in?</h2>
        <p>
          Enter your email and we'll send you a link to reset your password.
        </p>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
          <div className="forget-password-mb__button">
            <button className="lux-btn lux-btn-primary" type="submit">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ForgetPasswordSend = ({ type }) => {
  return (
    <div className="auth-container-mb forget-send-mb">
      <HeaderMb title="Forgot Password" />
      <div className="forget-send-mb__message">
        <img src={SendIcon} alt="" />
        <h2>Password Reset Sent !</h2>
        <p>A link will be sent to this email if the account exists.</p>
        <Link
          to={type === TYPE_LANDLORD ? PATH.LOGIN : PATH.TENANT_LOGIN}
          className="lux-btn lux-btn-primary"
        >
          Done
        </Link>
      </div>
    </div>
  );
};

const ForgetPasswordMobile = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const [isSendMail, setIsSendMail] = useState(false);

  return (
    <>
      {isSendMail ? (
        <ForgetPasswordSend type={type} />
      ) : (
        <ForgetPasswordForm type={type} setIsSendMail={setIsSendMail} />
      )}
      <ReturnLogin />
    </>
  );
};

export default ForgetPasswordMobile;
