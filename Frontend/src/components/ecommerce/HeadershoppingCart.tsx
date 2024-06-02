import { IoCartOutline } from "react-icons/io5";

function HeadershoppingCart() {
  return (
    <div className="relative pointer ">
      <IoCartOutline />
      <div className="bg-[#0dcaf0] h-[22px] w-[22px] rounded-full border-solid border-[1px] border-black absolute top-[-15px] right-[-5px] text-sm text-center ">
        0
      </div>
    </div>
  );
}

export default HeadershoppingCart;
