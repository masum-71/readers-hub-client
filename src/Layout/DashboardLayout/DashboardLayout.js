import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useBuyer from "../../Hooks/useBuyer";
import Navbar from "../../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  // const { data: users = [], isLoading } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: async () => {
  //     const res = await fetch(`http://localhost:5000/users`);
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  // if (isLoading) {
  //   return <progress className="progress w-56"></progress>;
  // }

  // const buyers = users?.filter((user) => user.userRole === "buyer");

  // console.log(buyers);
  const { user } = useContext(AuthContext);
  const [isBuyer] = useBuyer(user?.email);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-sm bg-pink-600 drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {isBuyer && (
              <li>
                <Link>My Orders</Link>
              </li>
            )}
            <li>
              <Link>Add Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
