import { Outlet } from "react-router-dom";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";

function MainLayout() {
  return (
    <div className="h-screen flex flex-col pt-10 md:px-40  ">
      <Header />
      <div className=" mt-[30px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
