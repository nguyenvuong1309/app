import { useMediaQuery } from "react-responsive";
import SignUpDesktop from "./Desktop";
import SignUpMobile from "./Mobile";

const SignUp = ({ type }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return isMobile ? <SignUpMobile type={type} /> : <SignUpDesktop type={type} />;
};

export default SignUp;
