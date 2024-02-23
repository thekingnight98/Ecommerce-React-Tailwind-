import React from "react";
import Slider from "react-slick";

const TestimonialsData = [
  {
    id: 1,
    name: "John Doe",
    text: "This product has changed my life for the better. Highly recommend it to anyone looking for a positive change!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Incredible results after just one month of use. The quality is unmatched.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Alex Johnson",
    text: "I was skeptical at first, but I'm so glad I gave it a chance. Truly remarkable!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 4,
    name: "Emily Davis",
    text: "Customer service was outstanding, and the product itself has exceeded my expectations.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Chris Green",
    text: "A top-notch product from a top-notch company. I've seen significant improvements since I started.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 6,
    name: "Sam Taylor",
    text: "Absolutely love it! It's been a game-changer for my daily routine.",
    img: "https://picsum.photos/101/101",
  },
];

function Testimonials() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 dark:bg-gray-800">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className=" text-sm text-primary">
            What our custommer say
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            laborum velit odit, voluptatem iure ipsam modi, error voluptas
            beatae hic tenetur? Voluptatum quisquam mollitia vitae dolor
            expedita saepe! Nostrum, inventore!
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div className="my-6" key={data.id}>
                <div
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 
              mx-4 rounded-xl dark:bg-gray-600 bg-primary/10 relative
              "
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      className="rounded-full w-20 h-20"
                      alt="testimonialProfile"
                    />
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-2">
                      <p className="text-xs text-gray-400">{data.text}</p>
                      <h1
                        className="text-xl font-bold
                    text-black/80 dark:text-light
                    "
                      >
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p
                    className="text-black/20 text-9xl font-serif
                  absolute top-0 right-0
                  "
                  >
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
