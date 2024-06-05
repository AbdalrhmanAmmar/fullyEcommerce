import Category from "../components/ecommerce/Category";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import actGetCategories from "../store/Categories/thunk/GetCategories";
import Loading from "../components/shared/Loading";

function Categories() {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  const CategoryList =
    records.length > 0
      ? records.map((category) => (
          <div className="flex justify-center mb-5 mt-2" key={category.id}>
            <Category {...category} />
          </div>
        ))
      : "there are no categories";

  return (
    <Loading loading={loading} error={error}>
      <div className="flex  ">
        <div className="grid grid-cols-4 gap-y-6  w-full ">{CategoryList}</div>
      </div>
    </Loading>
  );
}

export default Categories;
