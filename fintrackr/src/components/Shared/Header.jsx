import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Button from "./Button";

const Header = () => {
  return (
    <div className=" px-6  bg-customBg">
      <nav className="flex justify-between mx-auto ">
        {/* logo */}
        <Link to="/">
          <img src={logo} className="h-14" alt="logo" />
        </Link>
        {/* navigation items */}
        <div className="flex justify-between items-center gap-4">
          {/* <button>Login</button>
          <button>Get Start</button> */}
          <Button className="px-4 py-1" variant="primary">
            <Link to="/login"> Log in</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
