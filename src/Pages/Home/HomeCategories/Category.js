import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { img, _id, categori } = category;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="h-96" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{categori}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link
              to={`category/${_id}`}
              className="btn btn-primary bg-pink-600"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
