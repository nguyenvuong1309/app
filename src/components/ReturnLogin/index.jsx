import PATH from "../../config/path";
import { Link } from "react-router-dom";
import "./style.scss";

const ReturnLogin = () => {
  return (
    <Link to={PATH.LOGIN} className="return-login">
      Return to Login Page
    </Link>
  );
};

export default ReturnLogin;
