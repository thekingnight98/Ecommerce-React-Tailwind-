import React from "react";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { MdLocalOffer } from "react-icons/md";

function Banner() {
  return (
    <div
      className="min-h-[550px] flex justify-center 
      items-center py-2 sm:py-0 dark:bg-gray-800"
    >
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2
        gap-6 items-center"
        >
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
              src="https://shopsy-tcj.netlify.app/assets/women2-wroTMLvf.jpg"
              alt="BannerImage"
            />
          </div>

          {/* text detail section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0 ">
            <h1 className="text-3xl sm:text-4xl font-bold dark:text-white">
              Winter sale upto 50% Off
            </h1>
            <p className="text-sm text-gray-500 tracking-wide leading-5 dark:text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              fuga fugiat aut labore in eligendi dignissimos ratione quisquam
              doloremque excepturi sint officiis porro, natus, non hic rerum
              neque corporis voluptatum.
            </p>
            <div>
              <div data-aos="fade-up" className="flex gap-4 items-center pb-1">
                <GrSecure
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                     bg-violet-100 dark:bg-violet-400"
                />
                <p className="dark:text-white">Quality Products</p>
              </div>

              <div data-aos="fade-up" className="flex gap-4 items-center pb-1">
                <IoFastFood 
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                     bg-orange-100 dark:bg-orange-400"
                />
                <p className="dark:text-white">Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex gap-4 items-center pb-1 ">
                <GiFoodTruck 
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                     bg-green-100 dark:bg-green-400"
                />
                <p className="dark:text-white">Easy Payment method</p>
              </div>
              <div data-aos="fade-up" className="flex gap-4 items-center">
                <MdLocalOffer 
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                     bg-yellow-100 dark:bg-yellow-400"
                />
                <p className="dark:text-white">Get offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
