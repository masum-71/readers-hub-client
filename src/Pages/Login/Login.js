import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className=" flex justify-center items-center">
      <div className="w-96 border-4 my-12 p-4 bg-slate-100">
        <h1 className="text-2xl text-center">Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-xl">Email</span>
            </label>
            <input
              className="input input-bordered w-full "
              type="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full mb-5">
            <label className="label">
              <span className="label-text text-xl">Password</span>
            </label>
            <input
              className="input input-bordered w-full "
              type="password"
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "password must be 6 characters or long",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>

          <input
            className="btn btn-primary bg-pink-600 w-full"
            type="submit"
            value="Login"
          />
          <div className="text-center text-red-500 mt-3">
            {/* {loginError && <p>{loginError}</p>} */}
          </div>
        </form>
        <p className="text-center my-3">
          New to Readers Hub ?{" "}
          <Link to="/signup" className="text-pink-600">
            Create new account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleLogin}
          className="btn text-white btn-outline w-full bg-pink-600"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
