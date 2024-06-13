import Category from "../components/ecommerce/Category";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import actGetCategories from "../store/Categories/thunk/GetCategories";
import Loading from "../components/shared/Loading";
import GridList from "../components/shared/GridList";

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

  return (
    <Loading loading={loading} error={error}>
      <GridList
        text="there is no category"
        records={records}
        renderItem={(record) => <Category {...record} />}
      />
      <div className="flex  "></div>
    </Loading>
  );
}

export default Categories;
