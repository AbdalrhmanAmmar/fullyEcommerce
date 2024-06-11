import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store";
import { addToCart } from "../../store/AddTocart/AddCartSlice";
import { TProduct } from "../../types";
import { FaSpinner } from "react-icons/fa";

function Product({ id, title, img, price }: TProduct) {
  const [Added, setAdded] = useState<boolean>(false);

  useEffect(() => {
    if (Added) {
      const debouncedAdded = setTimeout(() => {
        setAdded(false);
      }, 300);
      return () => clearTimeout(debouncedAdded);
    }
  }, [Added]);

  const dispatch = useAppDispatch();

  const addTocart = () => {
    setAdded(true);
    dispatch(addToCart(id));
  };
  return (
    <div className="w-[120px] flex flex-col justify-between">
      <div className="w-full h-[180px] bg-[#f2f2f2] block ">
        <img src={img} alt={title} />
      </div>
      <h2
        title={title}
        className="text-[17px] mt-2 mb-3 w-full overflow-hidden whitespace-nowrap text-ellipsis "
      >
        {title}
      </h2>
      <h3 className="text-[13px]">{price} Egp</h3>
      <button
        disabled={Added}
        className={`bg-[rgb(96,165,250)] text-black rounded-md my-2 py-2 px-3 $`}
        onClick={addTocart}
      >
        {Added ? (
          <span className="flex justify-center items-center gap-3">
            <FaSpinner />
            Loading
          </span>
        ) : (
          <span>Add To cart</span>
        )}
      </button>
    </div>
  );
}

export default Product;
