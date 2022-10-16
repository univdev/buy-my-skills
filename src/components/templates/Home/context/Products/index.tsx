import React from "react";
import { ProductsContextProviderProps } from "./types";

export const ProductsContext = React.createContext<ProductsContextProviderProps>({});

export const ProductsContextProvider = (props: ProductsContextProviderProps) => {
  return (
    <ProductsContext.Provider value={{}}>
      { props.children }
    </ProductsContext.Provider>
  );
};
