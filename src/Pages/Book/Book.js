import React from "react";
import toast from "react-hot-toast";

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
    email,
  } = book;

  const handleReport = (event) => {
    event.preventDefault();

    const report = {
      name,
      email,
      price,
      description,
    };

    fetch("http://localhost:5000/report", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(report),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(`Your report is successfully done`);
        } else {
          toast.error(`${data.message}`);
        }
      });
  };

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
          <button
            onClick={() => handleReport(book)}
            className="btn btn-primary btn-xs bg-pink-600"
          >
            Report
          </button>
        </div>
      </div>
      {/* <BookModal book={book}></BookModal> */}
    </div>
  );
};

export default Book;
