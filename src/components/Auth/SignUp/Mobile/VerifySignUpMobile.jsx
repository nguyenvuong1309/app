import { fetchVerifySignUp } from "../../../../apis/auth.api";
import HeaderMb from "../../../../components/HeaderMb";
import { TYPE_LANDLORD } from "../../../../config/constants";
import PATH from "../../../../config/path";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { formatEmail } from "../../../../utils/functions";
import "./style.scss";

const VerifySignUpMobile = ({ type }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [otp, setOtp] = useState("");

  const sendOpt = async () => {
    if (otp.length !== 4) return;

    const response = await fetchVerifySignUp(otp);

    if (response.data) {
      navigate(type === TYPE_LANDLORD ? PATH.LOGIN : PATH.TENANT_LOGIN);
    }
  };

  return (
    <div className="auth-container-mb">
      <HeaderMb title="CREATE YOUR ACCOUNT" />
      <div className="register__verify">
        <p>
          We have sent a confirmation code to
          <br /> {formatEmail(searchParams.get("email"))}.
          <br /> Please enter the 4 digit code provided to verify your identity.
        </p>
        <div className="register__code">
          <OTPInput
            className="register__code"
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />
        </div>
      </div>
      <div className="register__button">
        <button className="lux-btn lux-btn-primary" onClick={sendOpt}>
          Next
        </button>
        <Link to={PATH.LOGIN} className="lux-btn lux-btn-secondary">
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default VerifySignUpMobile;
