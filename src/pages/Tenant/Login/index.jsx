import Login from "../../../components/Auth/Login";
import { TYPE_TENANT } from "../../../config/constants";

const TenantLogin = () => {
  return <Login type={TYPE_TENANT} />;
};

export default TenantLogin;
