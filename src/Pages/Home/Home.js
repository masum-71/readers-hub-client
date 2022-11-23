import React from "react";
import Advertisement from "./Advertisement/Advertisement";
import Banner from "./Banner/Banner";
import HomeCategories from "./HomeCategories/HomeCategories";
import OurCommitment from "./OurCommitment/OurCommitment";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Advertisement></Advertisement>
      <HomeCategories></HomeCategories>
      <OurCommitment></OurCommitment>
    </div>
  );
};

export default Home;
