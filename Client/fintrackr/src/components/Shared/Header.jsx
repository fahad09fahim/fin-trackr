import logo from "../../assets/logo.svg";
import Button from "./Button";

const Header = () => {
  return (
    <div className=" px-6  bg-customBg">
      <nav className="flex justify-between mx-auto ">
        {/* logo */}
        <img src={logo} className="h-14" alt="logo" />
        {/* navigation items */}
        <div className="flex justify-between items-center gap-4">
          {/* <button>Login</button>
          <button>Get Start</button> */}
          <Button className="px-4 py-1" variant="primary">
            Log in
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
