import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
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

  const handleDelete = (id) => {
    const proceed = window.confirm("Do you want to delete this user?");
    if (proceed) {
      fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("deleted successfully");
            refetch();
            // alert("deleted successfully");
            // const remaining = orders.filter((odr) => odr._id !== id);
            // setOrders(remaining);
          }
        });
    }
  };
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
                  <button
                    onClick={() => handleDelete(sell._id)}
                    className="btn btn-xs bg-pink-600"
                  >
                    Delete
                  </button>
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
