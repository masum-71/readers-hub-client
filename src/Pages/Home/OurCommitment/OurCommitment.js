import React from "react";
import {
  FaRegCreditCard,
  FaRocket,
  FaRocketchat,
  FaSync,
} from "react-icons/fa";

const OurCommitment = () => {
  return (
    <div>
      <h4 className="text-3xl text-center font-bold my-7">Our Commitment</h4>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center border-2 p-6 rounded-3xl">
          <div>
            <FaRocket className="text-pink-600 text-5xl"></FaRocket>
          </div>
          <div className="ml-6">
            <p className="text-2xl font-bold">Free Delivery</p>
            <p className="text-slate-500">Use Coupons to get Free Delivery</p>
          </div>
        </div>
        <div className="flex items-center border-2 p-6 rounded-3xl">
          <div>
            <FaSync className="text-pink-600 text-5xl"></FaSync>
          </div>
          <div className="ml-6">
            <p className="text-2xl font-bold">5 Days Return</p>
            <p className="text-slate-500">If goods have problems</p>
          </div>
        </div>
        <div className="flex items-center border-2 p-6 rounded-3xl">
          <div>
            <FaRegCreditCard className="text-pink-600 text-5xl"></FaRegCreditCard>
          </div>
          <div className="ml-6">
            <p className="text-2xl font-bold">Secure Payment</p>
            <p className="text-slate-500">100% secure payment</p>
          </div>
        </div>
        <div className="flex items-center border-2 p-6 rounded-3xl">
          <div>
            <FaRocketchat className="text-pink-600 text-5xl"></FaRocketchat>
          </div>
          <div className="ml-6">
            <p className="text-2xl font-bold">24/7 Support</p>
            <p className="text-slate-500">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCommitment;
