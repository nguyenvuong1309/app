import HeaderMb from "components/HeaderMb";
import PATH from "config/path";
import { Link } from "react-router-dom";
import "./style.scss";

const SignUpSuccess = () => {
  return (
    <div className="signup-mb auth-container-mb">
      <HeaderMb title="CREATE YOUR ACCOUNT" />
      <div className="signup-mb__message">
        <h2>Account created successfully !</h2>
        <p>Account has been successfully created. Please return to the log in screen.</p>
        <Link to={PATH.LOGIN} className="lux-btn lux-btn-primary">
          Return to Log In
        </Link>
      </div>
    </div>
  );
};

export default SignUpSuccess;
