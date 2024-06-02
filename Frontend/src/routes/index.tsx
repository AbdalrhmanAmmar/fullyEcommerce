import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Categories from "../pages/Categories";
import Login from "./../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import Products from "../pages/Products";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Categories" element={<Categories />} />
        <Route
          path="Products/:prefix"
          element={<Products />}
          loader={({ params }) => {
            if (!/^[a-z]+$/i.test(params.prefix as string)) {
              throw new Response("bad request", {
                statusText: "Category not Found",
                status: 400,
              });
            } else return true;
          }}
        />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Route>
    </>
  )
);

export default router;
