import { IoCartOutline } from "react-icons/io5";
import { useAppSelector } from "../../store";
import { useEffect, useState } from "react";
import { getCartQuantit } from "../../store/cart/CartSlice";

function HeadershoppingCart() {
  const [isAnimation, setisAnimation] = useState<boolean>(false);

  const cartItems = useAppSelector(getCartQuantit);

  useEffect(() => {
    if (cartItems === 0) {
      setisAnimation(false);
    } else {
      setisAnimation(true);
      const debounce = setTimeout(() => {
        setisAnimation(false);
      }, 300);
      return () => clearTimeout(debounce);
    }
  }, [cartItems]);

  return (
    <div className="relative pointer ">
      <IoCartOutline />
      <div
        className={`bg-[#0dcaf0] h-[22px] w-[22px] rounded-full border-solid border-[1px] border-black absolute top-[-15px] right-[-5px] text-sm text-center 
            
        ${isAnimation ? "pumping " : null}`}
      >
        <h2>{cartItems}</h2>
      </div>
    </div>
  );
}

export default HeadershoppingCart;
