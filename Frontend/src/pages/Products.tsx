import { useEffect } from "react";
import Product from "../components/ecommerce/Product";
import { useAppDispatch, useAppSelector } from "../store";
import actGetProducts from "../store/Products/thunk/Getproducts";
import { useParams } from "react-router-dom";
import Loading from "../components/shared/Loading";
import { productsCleanUp } from "../store/Products/ProductsSlice";
import GridList from "../components/shared/GridList";

function Products() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

  const cartItems = useAppSelector((state) => state.Cart.items);

  const productsInfo = records.map((record) => ({
    ...record,
    quantity: cartItems[record.id] || 0,
  }));

  useEffect(() => {
    dispatch(actGetProducts(params.prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  // const ProductList =
  //   records.length > 0
  //     ? records.map((product) => (
  //         <div className="flex justify-center mb-5 mt-2" key={product.id}>
  //           <Product {...product} />
  //         </div>
  //       ))
  //     : "there are no products";

  return (
    <Loading loading={loading} error={error}>
      <GridList
        text="there is no item available"
        records={productsInfo}
        renderItem={(record) => <Product {...record} />}
      />
      <div className="flex  bg-gray-100"></div>
    </Loading>
  );
}

export default Products;
