import React from "react";

const Book = ({ book, setProduct }) => {
  const {
    name,
    price,
    description,
    year,
    location,
    condition,
    OriginalPrice,
    photo,
    time,
  } = book;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="h-72 w-full" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title -mb-2">{name}</h2>
        <p className="font-semibold">Author: {description}</p>
        <div>
          <p>Original Price: ${OriginalPrice}</p>
          <p>
            <strong>Resale Price: ${price}</strong>
          </p>
          <p>Purchase Year: {year}</p>
          <p>Location: {location}</p>
          <p>Condition: {condition}</p>
          <p>Posted Time: {time}</p>
        </div>
        <div className="card-actions justify-end">
          <label
            className="btn btn-primary btn-xs bg-pink-600"
            htmlFor="bookingModal"
            onClick={() => setProduct(book)}
          >
            Book now
          </label>
          <button className="btn btn-primary btn-xs bg-pink-600">Report</button>
        </div>
      </div>
      {/* <BookModal book={book}></BookModal> */}
    </div>
  );
};

export default Book;
