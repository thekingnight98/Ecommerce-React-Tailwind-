import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
const footerlogo = "https://shopsy-tcj.netlify.app/assets/logo-Jm4BVSCI.png";
const BannerImg = {
  backgroundImage: `url(https://shopsy-tcj.netlify.app/assets/footer-pattern-mGVwO-y6.jpg)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

function Footer() {
  return (
    <div style={BannerImg} className="text-white">
      <div 
      data-aos="zoom-in"
      className="container">
        <div className="grid md:grid-cols-3 pb-30 pt-5">
          {/* conpany details */}
          <div className="py-8 px-4">
            <h1
              className="sm:text-3xl text-xl font-bold sm:text-left text-justify
            mb-3 flex items-center gap-3"
            >
              <img className="max-w-[50px]" src={footerlogo} alt="" />
              Shopping
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              reprehenderit.
            </p>
          </div>

          {/* Footer Links */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Link
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer
                             hover:text-primary duration-300
                             hover:translate-x-1"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          

          <div>
             {/* social links */}
             <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Thailand, Bangkok</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+91 123456789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
