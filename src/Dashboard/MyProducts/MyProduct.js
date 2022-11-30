import React from "react";

const MyProduct = ({ product }) => {
  const { name, description, photo } = product;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-72" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-xs bg-pink-600">Delete</button>
          <button className="btn btn-xs bg-pink-600">Advertise</button>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
