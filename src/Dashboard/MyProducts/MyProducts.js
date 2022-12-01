import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

import MyProduct from "./MyProduct";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: products = [] } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products/?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(products);
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {products.length < 1 ? (
        <>
          <p className="text-center font-bold text-2xl">
            You do not add any product yet
          </p>
        </>
      ) : (
        products.map((product, i) => (
          <MyProduct key={i} product={product}></MyProduct>
        ))
      )}
    </div>
  );
};

export default MyProducts;
