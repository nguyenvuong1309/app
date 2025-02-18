import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import OTPInput from "react-otp-input";
import { fetchVerifySignUp } from "../../../../apis/auth.api";
import { TYPE_LANDLORD } from "../../../../config/constants";
import PATH from "../../../../config/path";
import Logo from "../../../../logo.svg";
import Spinner from "../../../Spinner";
import axios from "axios";
import { TENANT, LANDLORD } from "../../../../utils/Constants";
import { toast } from "react-toastify";

const OTP_RESEND_TIME = 5; // 5 seconds

const VerifySignUpDesktop = ({ type }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(OTP_RESEND_TIME);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    const timer =
      countdown > 0 && setTimeout(() => setCountdown(countdown - 1), 1000);

    if (countdown === 0) {
      setCanResend(true);
    }

    return () => clearTimeout(timer);
  }, [countdown]);

  const onVerifyOTP = async () => {
    if (otp.length !== 4) {
      setError("Please enter a 4-digit code");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/api/auth/verify_otp/`,
        {
          email: searchParams.get("email"),
          otp_purpose: "Signup",
          otp: otp,
          user_type: window.location.pathname.includes("tenant")
            ? TENANT
            : LANDLORD,
        }
      );

      toast.success("Verify successfully");
      if (response.data) {
        navigate(type === TYPE_LANDLORD ? PATH.LOGIN : PATH.TENANT_LOGIN);
      } else {
        setError("Invalid verification code");
      }
    } catch (err) {
      console.log("🚀 ~ onVerifyOTP ~ err:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const resendOTPCode = async () => {
    if (!canResend) return;

    setResendLoading(true);
    setError("");

    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/api/auth/resend_otp/`,
        {
          email: searchParams.get("email"),
          purpose: searchParams.get("purpose"),
          user_type: searchParams.get("user_type"),
          otp_channel: "Email",
        }
      );
      setCanResend(false);
      setCountdown(OTP_RESEND_TIME);
      setError("New verification code has been sent");
    } catch (err) {
      setError("Failed to resend verification code");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <img
              src={Logo}
              alt="LuxOasis Logo"
              className="h-16 w-16 animate-pulse"
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Verify Your Account
          </h1>
          <p className="text-sm text-gray-600">
            We've sent a 4-digit verification code to your email
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex justify-center w-full">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span className="mx-2">-</span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="w-20 h-10 text-center text-3xl font-bold
                    border-2 border-teal-500
                    focus:outline-none focus:ring-2 focus:ring-teal-600
                    transition-all duration-200
                    mx-2
                    text-teal-800
                    hover:border-teal-600
                    shadow-md
                    rounded-lg
                    tracking-widest
                    bg-gray-50
                    focus:bg-white
                    appearance-none
                    select-none
                    no-spinners
                    "
                />
              )}
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-2 text-center animate-shake">
              {error}
            </p>
          )}

          <div className="text-center mt-4">
            <button
              onClick={resendOTPCode}
              disabled={!canResend || resendLoading}
              className={`text-sm ${
                canResend
                  ? "text-teal-600 hover:text-teal-800"
                  : "text-gray-400"
              } transition-colors duration-300`}
            >
              {resendLoading
                ? "Sending..."
                : canResend
                ? "Resend Verification Code"
                : `Resend in ${countdown} seconds`}
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            <button
              onClick={onVerifyOTP}
              disabled={isLoading}
              className="w-full py-3 px-4 
                bg-teal-600 text-white rounded-md 
                hover:bg-teal-700 focus:outline-none 
                focus:ring-2 focus:ring-teal-500 
                transition-colors duration-300
                flex items-center justify-center
                transform active:scale-95
                disabled:opacity-50"
            >
              {isLoading ? <Spinner /> : "Verify"}
            </button>

            <button
              onClick={() => navigate(PATH.LOGIN)}
              className="w-full py-3 px-4 
                border border-gray-300 text-gray-700 rounded-md 
                hover:bg-gray-100 focus:outline-none 
                focus:ring-2 focus:ring-teal-500 
                transition-colors duration-300
                transform active:scale-95"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifySignUpDesktop;
