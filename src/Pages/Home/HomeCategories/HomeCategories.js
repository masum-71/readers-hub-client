import { useQuery } from "@tanstack/react-query";
import React from "react";
import Category from "./Category";

const HomeCategories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h3 className="text-3xl font-bold my-6 text-center">
        Our Book Collection
      </h3>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;
