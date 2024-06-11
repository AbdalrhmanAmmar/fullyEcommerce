export type Tloadings = "idle" | "loading" | "pending" | "rejected";

export type TCategory = {
  id?: number;
  title: string;
  prefix: string;
  img: string;
};

export interface TProduct {
  id: number;
  title: string;
  price: number;
  cat_prefix?: string;
  img: string;
  quantity?: number;
}
