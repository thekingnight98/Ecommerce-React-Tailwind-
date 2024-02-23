import React from "react";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    image: "https://shopsy-tcj.netlify.app/assets/shirt-cwf9SKdB.png",
    title: "Classic White T-Shirt",
    desc: "A timeless white t-shirt made from 100% organic cotton, perfect for every occasion.",
  },
  {
    id: 2,
    image: "https://shopsy-tcj.netlify.app/assets/shirt2-XQzG6elp.png",
    title: "Vintage Denim Jeans",
    desc: "High-quality vintage denim jeans that offer both style and comfort for everyday wear.",
  },
  {
    id: 3,
    image: "https://shopsy-tcj.netlify.app/assets/shirt3-HwQ10bVo.png",
    title: "Casual Hoodie",
    desc: "A soft and cozy hoodie in a neutral color, ideal for a relaxed day out or a comfortable evening at home.",
  },
];

function TopProducts() {
  return (
    <div className="mb-12 pt-10">
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className=" text-sm text-primary">
            Top Rate Product for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold dark:text-white">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            laborum velit odit, voluptatem iure ipsam modi, error voluptas
            beatae hic tenetur? Voluptatum quisquam mollitia vitae dolor
            expedita saepe! Nostrum, inventore!
          </p>
        </div>
        {/* body section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 
        md:gap-5 place-items-center"
        >
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80
              dark:hover:bg-primary hover:text-white relative shadow-xl duration-300
              group max-w-[300px]"
              key={data.id}
            >
              {/* image section */}
              <div>
                <img
                  className="max-w-[140px] block mx-auto transform -translate-20
                group-hover:scale-105 duration-300 drop-shadow-md
                "
                  src={data.image}
                  alt="bestProduct"
                />
              </div>

              {/* detail section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold dark:text-white">{data.title}</h1>
                <p
                  className=" text-gray-500 group-hover:text-white
                 duration-300 text-sm line-clamp-2 dark:text-white"
                >
                  {data.desc}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 
                text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white
                group-hover:text-primary
                "
                  // onClick={handleOrderPopup}
                >
                  Order now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
