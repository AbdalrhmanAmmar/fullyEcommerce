import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Categories from "../pages/Categories";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Categories" element={<Categories />} />
        <Route path="About" element={<About />} />
      </Route>
    </>
  )
);

export default router;
