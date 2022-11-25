import React from "react";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";

const SingleCategory = () => {
  const { categori, products } = useLoaderData();
  console.log(categori);
  return (
    <div>
      <h2 className="text-3xl text-center">
        Available <strong>{categori}</strong> books
      </h2>
      {products.map((book, i) => (
        <Book key={i} book={book}></Book>
      ))}
    </div>
  );
};

export default SingleCategory;
