import { TProduct } from "../../types";
import CartItem from "./CartItem";

type CartItemListProps = {
  products: TProduct[];
  changeQuantityItem: (id: number, quantity: number) => void;
};

function CartItemList({ products, changeQuantityItem }: CartItemListProps) {
  const renderlist = products.map((el) => (
    <CartItem key={el.id} {...el} changeQuantityItem={changeQuantityItem} />
  ));

  console.log(renderlist);
  return <div>{renderlist}</div>;
}

export default CartItemList;
