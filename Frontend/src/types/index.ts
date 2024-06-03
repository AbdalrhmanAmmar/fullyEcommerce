export type Tloadings = "idle" | "loading" | "pending" | "rejected";

export type TCategory = {
  id?: number;
  title: string;
  prefix: string;
  img: string;
};

export type TProduct = {
  id?: number;
  title: string;
  price: string;
  cat_prefix?: string;
  img: string;
};
