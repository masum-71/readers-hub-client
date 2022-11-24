import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleCategory = () => {
  const { categori, products } = useLoaderData();
  console.log(categori);
  return (
    <div>
      <h2 className="text-3xl text-center">
        Available <strong>{categori}</strong> books
      </h2>
      <h4>{products.length}</h4>
    </div>
  );
};

export default SingleCategory;
