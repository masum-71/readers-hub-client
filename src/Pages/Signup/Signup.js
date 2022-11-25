import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { createUser, googleLogin } = useContext(AuthContext);

  const handleSignup = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        saveUser(data.name, data.email, data.userRole);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        saveUser(user.displayName, user.email);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const saveUser = (name, email, userRole = "buyer") => {
    const user = { name, email, userRole };
    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  return (
    <div className="flex  justify-center items-center">
      <div className="w-96 border-4 bg-slate-100 p-6">
        <p className="text-2xl text-center">Sign Up</p>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text"> Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-center mt-3">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full "
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full "
              {...register("password", {
                required: true,
                minLength: { value: 6, message: "minimum 6 characters" },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-center mt-3">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <p className="text-center text-xl mt-4">Sign up as a</p>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text font-bold">Buyer</span>
                <input
                  type="radio"
                  name="userRole"
                  className="radio checked:bg-blue-500"
                  checked
                  value="buyer"
                  {...register("userRole")}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text font-bold">Seller</span>
                <input
                  type="radio"
                  name="userRole"
                  value="seller"
                  className="radio checked:bg-blue-500"
                  {...register("userRole")}
                />
              </label>
            </div>
          </div>

          <input
            className="btn mt-4 btn-primary bg-pink-600 w-full"
            type="submit"
          />
        </form>
        <p className="text-center my-3">
          Already Have an account ?{" "}
          <Link to="/login" className="text-pink-600">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full bg-pink-600 text-white"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Signup;
