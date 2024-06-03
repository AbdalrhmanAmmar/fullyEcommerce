import { useEffect } from "react";
import Product from "../components/ecommerce/Product";
import { useAppDispatch, useAppSelector } from "../store";
import GetProducts from "../store/Products/thunk/Getproducts";

function Products() {
  // function Categories() {
  //   const dispatch = useAppDispatch();
  //   const { loading, error, records } = useAppSelector(
  //     (state) => state.categories
  //   );

  //   useEffect(() => {
  //     if (!records.length) {
  //       dispatch(GetProducts());
  //     }
  //   }, [dispatch, records]);

  //   const ProductList =
  //     records.length > 0
  //       ? records.map((product) => (
  //           <div className="flex justify-center mb-5 mt-2" key={product.id}>
  //             <Product {...product} />
  //           </div>
  //         ))
  //       : "there are no products";

  return (
    <div className="flex  bg-gray-100">
      <div className="grid grid-cols-4 gap-y-6  w-full ">
        <Product />
      </div>
    </div>
  );
}

export default Products;
