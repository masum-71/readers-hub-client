import React from "react";
import { Link } from "react-router-dom";

const Category = ({ singleCategory }) => {
  const { img, _id, category } = singleCategory;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="h-96" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category}</h2>
          <p className="mb-3">
            Buy your favorite <strong>{category}</strong> Book from us
          </p>
          <div className="card-actions justify-end">
            <Link
              to={`category/${_id}`}
              className="btn btn-primary bg-pink-600"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
