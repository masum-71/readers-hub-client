import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleSeller from "./SingleSeller";

const AllSeller = () => {
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  const seller = users.filter((user) => user.userRole === "seller");

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          {seller.map((sell, i) => (
            <tbody key={i}>
              <tr>
                <th>{i + 1}</th>
                <td>{sell.name}</td>
                <td>{sell.email}</td>
                <td>
                  <button className="btn btn-xs bg-pink-600">Delete</button>
                </td>
                <td>
                  <button className="btn btn-xs bg-pink-600">Verify</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
