import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import MyOrder from "./MyOrder";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bookings/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {bookings.map((booking, i) => (
        <MyOrder key={i} booking={booking}></MyOrder>
      ))}
    </div>
  );
};

export default MyOrders;
