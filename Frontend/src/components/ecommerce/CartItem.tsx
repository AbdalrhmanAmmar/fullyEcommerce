import { TProduct } from "../../types";

type CartItemType = TProduct & {
  changeQuantityItem: (id: number, quantity: number) => void;
};

function CartItem({
  title,
  img,
  price,
  max,
  id,
  changeQuantityItem,
}: CartItemType) {
  const renderoptions = Array(max)
    .fill(max)
    .map((_, idx) => {
      const qunatity = ++idx;

      return (
        <option value={qunatity} key={qunatity}>
          {" "}
          {qunatity}
        </option>
      );
    });

  const changequantityHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const quantity = +e.target.value;

    changeQuantityItem(id, quantity);
  };

  return (
    <div className="flex  justify-between m-6 p-6 border-solid border-b border-gray-700 ">
      <div className="space-y-3">
        <div>
          <img className="h-[180px]" src={img} />
        </div>
        <div>
          <div>
            <h2>{title}</h2>
            <h3>{price}</h3>
          </div>

          <button className="bg-red-500 px-2 py-1 rounded-md">Remove</button>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <span className="d-block mb-1 font-semibold">Quantity</span>
        <select name="" id="" onChange={changequantityHandler}>
          {renderoptions}
        </select>
      </div>
    </div>
  );
}

export default CartItem;
