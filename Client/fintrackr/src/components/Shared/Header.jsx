import logo from "../../assets/logo.svg";
import bigLogo from "../../assets/biglogo.svg";
import Button from "./Button";

const Header = () => {
  // const list = (
  //   <>
  //     <button>login</button>
  //    <button></button>
  //   </>
  // );
  return (
    <div className=" p-4  rounded-lg bg-customBg">
      <nav className="flex justify-between">
        {/* logo */}
        <img src={logo} className="h-[70px]" alt="logo" />
        {/* navigation items */}
        <div className="flex justify-between items-center gap-4">
          {/* <button>Login</button>
          <button>Get Start</button> */}
          <Button variant="primary">Log in</Button>
          <Button variant="secondary">Get Start</Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
