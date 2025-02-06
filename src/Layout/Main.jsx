import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <div className="mx-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
