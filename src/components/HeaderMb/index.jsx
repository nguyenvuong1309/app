import PATH from "../../config/path";
import { GoChevronLeft } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./style.scss";

const HeaderMb = ({ title }) => {
  return (
    <div className="header-mb">
      <div className="header-mb__actions">
        <Link to={PATH.LOGIN}>
          <GoChevronLeft />
        </Link>
        <RxHamburgerMenu />
      </div>
      <h1>{title}</h1>
    </div>
  );
};

export default HeaderMb;
