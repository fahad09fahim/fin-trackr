import logo from "../../assets/logo.svg";
import Button from "./Button";

const Header = () => {
  return (
    <div className="px-3   bg-customBg">
      <nav className="flex justify-between">
        {/* logo */}
        <img src={logo} className="h-[70px]" alt="logo" />
        {/* navigation items */}
        <div className="flex justify-between items-center gap-4">
          {/* <button>Login</button>
          <button>Get Start</button> */}
          <Button variant="primary">Log in</Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
