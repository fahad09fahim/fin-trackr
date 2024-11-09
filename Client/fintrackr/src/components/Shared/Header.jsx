import logo from "../../assets/logo.svg";
import Button from "./Button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import buttonAni from "../../assets/Animation - 1731140502079.json";

const Header = () => {
  // const list = (
  //   <>
  //     <button>login</button>
  //    <button></button>
  //   </>
  // );
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
          <Button variant="secondary" className="flex w-auto items-center">
            <span>Get Start</span>
            <span>
              <DotLottieReact
                src="https://lottie.host/74c84919-a9af-4af9-8a6a-74956a36f44f/fVCiVdTIXe.lottie"
                autoplay
                loop
                height={20}
                width={50}
              />
            </span>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
