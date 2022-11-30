import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const BookModal = ({ product, setProduct }) => {
  const { user } = useContext(AuthContext);
  const { name, price, photo } = product;

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/${user?.email}`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const bookName = form.bookName.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
      name,
      email,
      bookName,
      price,
      phone,
      location,
      photo,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(`${bookName} is successfully booked`);
          setProduct(null);
          refetch();
        } else {
          toast.error(`${data.message}`);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form
            onSubmit={handleBooking}
            className="py-10 grid grid-cols-1 gap-2"
          >
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              defaultValue={data?.name}
              readOnly
              className="input input-bordered w-full"
            />
            <label htmlFor="email">Your Email</label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              readOnly
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            <label htmlFor="bookName">Book Name</label>
            <input
              type="text"
              name="bookName"
              defaultValue={name}
              readOnly
              className="input input-bordered w-full"
            />
            <label htmlFor="price">Book Price</label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              readOnly
              className="input input-bordered w-full"
            />
            <label htmlFor="price">Your phone number</label>
            <input
              type="text"
              name="phone"
              className="input input-bordered w-full"
            />
            <label htmlFor="location">Your location</label>
            <select name="location" className="select select-bordered w-full ">
              <option value="Bhola">Bhola</option>
              <option value="Barishal">Barishal</option>
              <option value="Patuakhali">Patuakhali</option>
            </select>
            <input
              className="btn btn-primary bg-pink-600 mt-4"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
