import { useMediaQuery } from "react-responsive";
import ResetPasswordDesktop from "./Desktop";
import ResetPasswordMobile from "./Mobile";

const ResetPassword = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return isMobile ? <ResetPasswordMobile /> : <ResetPasswordDesktop />;
};

export default ResetPassword;
