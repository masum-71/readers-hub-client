import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <div className="card  w-full shadow-2xl bg-base-100">
          <div className="text-center">
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
          </div>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center mb-4">
            <Link className="btn">
              <button>Login with Google</button>
            </Link>
          </p>
          <p className="text-center mb-4">
            New to M'sPhotography ?{" "}
            <Link to="/signup" className="text-blue-600 font-bold">
              Sign Up
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
