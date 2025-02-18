import { useMediaQuery } from "react-responsive";
import { useSearchParams } from "react-router-dom";
import VerifySignUpDesktop from "./Desktop/VerifySignUpDesktop";
import VerifySignUpMobile from "./Mobile/VerifySignUpMobile";

const VerifySignUp = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return isMobile ? <VerifySignUpMobile type={type} /> : <VerifySignUpDesktop type={type} />;
};

export default VerifySignUp;
