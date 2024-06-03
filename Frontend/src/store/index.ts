import { configureStore } from "@reduxjs/toolkit";
import categories from "./Categories/CategoriesSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import products from "./Products/ProductsSlice";
export const store = configureStore({
  reducer: {
    categories: categories,
    products: products,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// export const useAppSelector = useSelector.withTypes<RootState>();

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
