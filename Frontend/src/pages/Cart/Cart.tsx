import { useEffect } from "react";
import CartItemTotalprice from "../../components/ecommerce/CartItemTotalprice";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  actgetproductsbyItem,
  changeQuantity,
} from "../../store/cart/CartSlice";
import Loading from "../../components/shared/Loading";
import CartItemList from "../../components/ecommerce/CartItemList";

function Cart() {
  const dispatch = useAppDispatch();
  const { items, loading, error, prodcutsFullInfo } = useAppSelector(
    (state) => state.Cart
  );

  const products = prodcutsFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  const changeQuantityItem = (id: number, quantity: number) => {
    dispatch(changeQuantity({ id, quantity }));
  };

  useEffect(() => {
    dispatch(actgetproductsbyItem());
  }, [dispatch]);
  return (
    <div>
      <Loading loading={loading} error={error}>
        <CartItemList
          products={products}
          changeQuantityItem={changeQuantityItem}
        />
        <CartItemTotalprice products={products} />
      </Loading>
    </div>
  );
}

export default Cart;
