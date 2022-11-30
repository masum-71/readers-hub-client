import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllBuyers = () => {
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

  const buyers = users.filter((user) => user.userRole === "buyer");

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
            </tr>
          </thead>
          {buyers.map((sell, i) => (
            <tbody key={i}>
              <tr>
                <th>{i + 1}</th>
                <td>{sell.name}</td>
                <td>{sell.email}</td>
                <td>
                  <button className="btn btn-xs bg-pink-600">Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
