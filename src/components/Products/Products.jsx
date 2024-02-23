import React from "react";
import { FaStar } from "react-icons/fa6";

function Products() {
    
  const ProductsData = [
    {
      id: 1,
      img: "https://shopsy-tcj.netlify.app/assets/women2-wroTMLvf.jpg",
      title: "T-Shirt Casual",
      rating: 4.5,
      color: "blue",
      aosDelay: 100,
    },
    {
      id: 2,
      img: "https://s.isanook.com/wo/0/ud/26/132509/1550514473-83717b06238f531447722c5526d95a58.jpg",
      title: "Jeans Classic Fit",
      rating: 4.8,
      color: "black",
      aosDelay: 200,
    },
    {
      id: 3,
      img: "https://shopsy-tcj.netlify.app/assets/women-NhG2D3pl.png",
      title: "Hoodie for All Seasons",
      rating: 4.7,
      color: "grey",
      aosDelay: 300,
    },
    {
      id: 4,
      img: "https://shopsy-tcj.netlify.app/assets/women3-HFaPDX0l.jpg",
      title: "Yellow",
      rating: 4.8,
      color: "black",
      aosDelay: 400,
    },
    {
      id: 5,
      img: "https://shopsy-tcj.netlify.app/assets/women4-zXERyOhD.jpg",
      title: "Fashin T-Shirt",
      rating: 4.7,
      color: "Pink",
      aosDelay: 500,
    },
  ];

  return (
    <div className="pt-4">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className=" text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="mt-2 mb-2 text-3xl font-bold dark:text-white">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            laborum velit odit, voluptatem iure ipsam modi, error voluptas
            beatae hic tenetur? Voluptatum quisquam mollitia vitae dolor
            expedita saepe! Nostrum, inventore!
          </p>
        </div>
        {/* body section */}
        <div>
          <div
            className="grid grid-cols1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
            place-items-center gap-5
            "
          >
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  className="h-[200px] w-[150px] 
                object-cover rounded-md"
                  src={data.img}
                  alt=""
                />

                <div>
                  <h3 className="font-semibold dark:text-white">{data.title}</h3>
                  <p className="text-sm text-gray-900 dark:text-white">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="dark:text-white">{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view al button */}
          <div className="flex justify-center pb-12">
            <button className="text-center mt-10 cursor-pointer 
            bg-primary rounded-md py-1 p-4 text-white">View All Products</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
