import { TProduct } from "../../types";

type ICartItemTotalprice = { products: TProduct[] };

function CartItemTotalprice({ products }: ICartItemTotalprice) {
  const subtotal = products.reduce((accumulator, el) => {
    const price = el.price;
    const quantity = el.quantity;
    if (quantity && typeof quantity === "number") {
      return accumulator + price * quantity;
    } else {
      return accumulator;
    }
  }, 0);

  return (
    <div className="flex justify-center gap-3">
      <div className="bg-blue-400 px-4 py-3 rounded-md text-2xl">
        <span>total:</span>
        <span>{subtotal}</span>
      </div>
    </div>
  );
}

export default CartItemTotalprice;
