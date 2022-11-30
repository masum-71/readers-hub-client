import React from "react";

const MyOrder = ({ booking }) => {
  const { photo, bookName, price } = booking;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Book Name: {bookName}</h2>
        <p className="font-bold text-2xl">Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Pay</button>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
