import { memo, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { TProduct } from "../../types";
import { FaSpinner } from "react-icons/fa";
import { addToCart } from "../../store/cart/CartSlice";

const product = memo(function Product({
  id,
  title,
  img,
  price,
  max,
  quantity,
}: TProduct) {
  const [Added, setAdded] = useState<boolean>(false);

  const { items } = useAppSelector((state) => state.Cart);
  const [MaxItem, setMaxItem] = useState(max);

  const currentQuantity = MaxItem - (quantity ?? 0);

  useEffect(() => {
    if (Added) {
      const debouncedAdded = setTimeout(() => {
        setAdded(false);
      }, 300);
      return () => clearTimeout(debouncedAdded);
    }
  }, [Added]);

  const dispatch = useAppDispatch();

  const addTocarthandler = () => {
    setAdded(true);
    setMaxItem((prev) => prev - 1);
    dispatch(addToCart(id));
    console.log("first");
  };
  return (
    <div className="w-[120px] flex flex-col space-y-4">
      <div className="w-full h-[180px] bg-[#f2f2f2] block ">
        <img src={img} alt={title} />
      </div>
      <h2
        title={title}
        className="text-[17px] mt-2 mb-3 w-full overflow-hidden whitespace-nowrap text-ellipsis "
      >
        {title}
      </h2>
      {max !== MaxItem && (
        <h3 className="flex items-center gap-2">
          Max Item:
          <span className="bg-indigo-400 rounded-full w-6 h-6 text-center ">
            {" "}
            {MaxItem}
          </span>
        </h3>
      )}
      <div className="">
        {MaxItem === 0 ? (
          <div className="bg-red-500 rounded-md">You Reach to the limit</div>
        ) : (
          `you can add ${currentQuantity}`
        )}
      </div>

      <h3 className="text-[13px]">{price} Egp</h3>
      {MaxItem === 0 ? (
        <button
          disabled
          className="bg-[rgb(96,165,250)] text-black rounded-md my-2 py-2 px-3 opacity-70"
        >
          You cant Add
        </button>
      ) : (
        <button
          onClick={addTocarthandler}
          disabled={Added}
          className={`bg-[rgb(96,165,250)] text-black rounded-md my-2 py-2 px-3 $`}
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
      )}
    </div>
  );
});

export default product;
