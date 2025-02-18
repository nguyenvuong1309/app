import { useMediaQuery } from "react-responsive";
import ForgetPasswordDesktop from "./Desktop";
import ForgetPasswordMobile from "./Mobile";

const ForgetPassword = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return isMobile ? <ForgetPasswordMobile /> : <ForgetPasswordDesktop />;
};

export default ForgetPassword;
