import { NavLink } from "react-router-dom";
import HeadershoppingCart from "../ecommerce/HeadershoppingCart";

const Navigate = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "/category" },
  { name: "About", href: "/About" },
  { name: "Login", href: "/Login" },
  { name: "Register", href: "/Register" },
];

function Header() {
  return (
    <header className="mx-4 flex flex-col space-y-4 ">
      <div className="flex flex-row justify-between w-full items-center  ">
        <h1 className="text-black text-3xl">
          Our
          <span className="bg-[#0dcaf0] py-1 px-3 rounded-md ml-3">Ecom</span>
        </h1>
        <span className="text text-3xl">
          <HeadershoppingCart />
        </span>
      </div>
      <nav className="flex  justify-between bg-[#343a40] text-white py-3 rounded-md ">
        <ul className="flex flex-cols space-x-4 mx-4">
          {Navigate.slice(0, 3).map((link) => (
            <li key={link.href}>
              <NavLink to={link.href}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
        <ul className="flex flex-cols space-x-4 mx-4">
          {Navigate.slice(3).map((link) => (
            <li key={link.href}>
              <NavLink to={link.href}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
