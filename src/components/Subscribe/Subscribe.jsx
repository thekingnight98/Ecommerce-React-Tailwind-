import React from "react";

const BannerImg = {
  backgroundImage: `url(https://shopsy-tcj.netlify.app/assets/orange-pattern-w2kUn2Xh.jpg)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

function Subscribe() {
  return (
    <div
      data-aos="zoom-in"
      style={BannerImg}
      className="pb-20 bg-gray-10 dark:bg-gray-800 text-white"
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1
            className="text-2xl !text-center sm:text-left 
          sm:text-4xl font-semibold"
          >
            Get Notified About New Products
          </h1>
          <input 
          data-aos="fade-up"
          className="w-full p-3"
          type="text" 
          placeholder="Enter your Email"
          />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
