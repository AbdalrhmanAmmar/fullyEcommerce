import { IoCartOutline } from "react-icons/io5";
import { useAppSelector } from "../../store";
import { getCarttotalQuantity } from "../../store/AddTocart/AddCartSlice";
import { useState, useEffect } from "react";

function HeadershoppingCart() {
  const [change, setchange] = useState<boolean>(false);

  const totalquantity = useAppSelector(getCarttotalQuantity);

  useEffect(() => {
    if (totalquantity > 0) {
      setchange(true);
      const timer = setTimeout(() => {
        setchange(false);
      }, 300); // Adjust the timeout duration to match your animation duration

      return () => clearTimeout(timer);
    }
  }, [totalquantity]);

  return (
    <div className="relative pointer ">
      <IoCartOutline />
      <div
        className={`bg-[#0dcaf0] h-[22px] w-[22px] rounded-full border-solid border-[1px] border-black absolute top-[-15px] right-[-5px] text-sm text-center ${
          change ? "pumping" : ""
        } `}
      >
        <h2>{totalquantity}</h2>
      </div>
    </div>
  );
}

export default HeadershoppingCart;
