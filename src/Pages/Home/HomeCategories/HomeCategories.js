import { useQuery } from "@tanstack/react-query";
import React from "react";

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
      <h3>{categories.length}</h3>
    </div>
  );
};

export default HomeCategories;
