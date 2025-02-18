import Login from "../../../components/Auth/Login";
import { TYPE_LANDLORD } from "../../../config/constants";

const LandlordLogin = () => {
  return <Login type={TYPE_LANDLORD} />;
};

export default LandlordLogin;
