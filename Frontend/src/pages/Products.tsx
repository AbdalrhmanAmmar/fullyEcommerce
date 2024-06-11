import { useEffect } from "react";
import Product from "../components/ecommerce/Product";
import { useAppDispatch, useAppSelector } from "../store";
import actGetProducts from "../store/Products/thunk/Getproducts";
import { useParams } from "react-router-dom";
import Loading from "../components/shared/Loading";
import { productsCleanUp } from "../store/Products/ProductsSlice";

function Products() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actGetProducts(params.prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  const ProductList =
    records.length > 0
      ? records.map((product) => (
          <div className="flex justify-center mb-5 mt-2" key={product.id}>
            <Product {...product} />
          </div>
        ))
      : "there are no products";

  return (
    <Loading loading={loading} error={error}>
      <div className="flex  bg-gray-100">
        <div className="grid grid-cols-4 gap-y-6  w-full ">{ProductList}</div>
      </div>
    </Loading>
  );
}

export default Products;
