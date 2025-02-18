import { useMediaQuery } from "react-responsive";
import { LoginDesktop } from "./Desktop";
import LoginMobile from "./Mobile";

const Login = ({ type }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return isMobile ? <LoginMobile type={type} /> : <LoginDesktop type={type} />;
};

export default Login;
