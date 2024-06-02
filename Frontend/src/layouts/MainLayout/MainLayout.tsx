import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";

function MainLayout() {
  return (
    <div className="h-screen felx flex-col py-10 md:px-40">
      <Header />
      <div className="mt-[30px]"></div>
      <Footer />
    </div>
  );
}

export default MainLayout;
