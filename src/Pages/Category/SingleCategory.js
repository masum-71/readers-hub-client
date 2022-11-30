import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";
import BookModal from "../Book/BookModal";

const SingleCategory = () => {
  const { category, products } = useLoaderData();
  const [product, setProduct] = useState(null);

  return (
    <div>
      <h2 className="text-3xl text-center mb-6">
        Available <strong>{category}</strong> books
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((book, i) => (
          <Book key={i} book={book} setProduct={setProduct}></Book>
        ))}
      </div>
      {product && (
        <BookModal setProduct={setProduct} product={product}></BookModal>
      )}
    </div>
  );
};

export default SingleCategory;
