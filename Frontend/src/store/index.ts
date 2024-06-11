import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categories from "./Categories/CategoriesSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import products from "./Products/ProductsSlice";
import cart from "./AddTocart/AddCartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};
const cartPersistConfig = {
  key: "cart",
  storage,
  whiteList: ["items"],
};

const rootReducer = combineReducers({
  categories: categories,
  products: products,
  cart: persistReducer(cartPersistConfig, cart),
});

const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// export const useAppSelector = useSelector.withTypes<RootState>();

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const presistor = persistStore(store);
export { store, presistor };
