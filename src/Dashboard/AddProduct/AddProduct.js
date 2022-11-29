import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const imageHostKey = process.env.REACT_APP_IMAGEBB_KEY;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const product = {
          category: data.category,
          name: data.name,
          email: data.email,
          price: data.price,
          mobile: data.mobile,
          description: data.description,
          year: data.year,
          location: data.location,
          condition: data.condition,
          photo: imgData.data.url,
        };

        fetch(`http://localhost:5000/categories`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(product),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.modifiedCount > 0) {
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/myproduct");
            }
          });
      });
  };

  return (
    <div>
      <h4 className="text-3xl text-center mb-10">Add Product</h4>
      <div className="w-96 m-auto border-4 bg-slate-100 p-6">
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              {...register("category", { required: true })}
            >
              <option value="Romantic">Romantic</option>
              <option value="History">History</option>
              <option value="Science fiction">Science fiction</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Book Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              {...register("name", { required: "name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-center mt-3">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text"> Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              className="input input-bordered w-full "
              {...register("email", { required: "email is required" })}
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full "
              {...register("price", { required: true })}
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Mobile Number</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full "
              {...register("mobile", { required: true })}
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              {...register("description", { required: true })}
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Year of purchase</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              {...register("year", { required: true })}
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              {...register("location", { required: true })}
            >
              <option value="Bhola">Bhola</option>
              <option value="Barishal">Barishal</option>
              <option value="Patuakhali">Patuakhali</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Condition</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              {...register("condition", { required: true })}
            >
              <option value="excellent">excellent</option>
              <option value="good">good</option>
              <option value="fair">fair</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text"> Photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full "
              {...register("image", { required: "image is required" })}
            />
            {errors.img && (
              <p className="text-red-500 text-center mt-3">
                {errors.img.message}
              </p>
            )}
          </div>

          <input className="btn mt-4 btn-accent w-full" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
