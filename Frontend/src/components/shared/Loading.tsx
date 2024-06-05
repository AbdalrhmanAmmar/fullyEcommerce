import { ReactNode } from "react";
import { Tloadings } from "../../types";

interface ILoadingProps {
  loading: Tloadings;
  error: null | string;
  children: ReactNode;
}

function Loading({ loading, error, children }: ILoadingProps) {
  if (loading === "pending") {
    return <p className="text-center">Loading</p>;
  }
  if (loading === "rejected") {
    return <p>{error}</p>;
  }

  return <>{children}</>;
}

export default Loading;
