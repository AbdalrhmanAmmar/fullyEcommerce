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
import Cart from "../pages/Cart/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="categories" element={<Categories />} />
        <Route
          path="categories/products/:prefix"
          element={<Products />}
          loader={({ params }) => {
            if (!/^[a-z]+$/i.test(params.prefix as string)) {
              throw new Response("bad request", {
                statusText: "Category not Found",
                status: 400,
              });
            }
            return true;
          }}
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </>
  )
);

export default router;
