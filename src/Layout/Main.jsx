import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header";
import Footer from "../components/Shared/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
