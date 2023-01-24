import React from "react";
import bannerImg from "../../assets/banner/bannerImg.jpg";

const Banner = () => {
  return (
    <div className="container mx-5 md:mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-20">
        <div className="">
          <h2 className="text-4xl font-semibold uppercase leading-snug">
            We Connect Brands through Social Media to enhance their online presence
          </h2>
          <button className="btn bg-yellow-500 py-3 px-5 text-xl font-semibold mt-5 rounded hover:bg-yellow-600 duration-500">Get Started</button>
        </div>
        <div className="">
          <img src={bannerImg} className="rounded w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
