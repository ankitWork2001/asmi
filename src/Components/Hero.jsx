import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import s1 from '../Photos/banner1.jpeg';
import s2 from '../Photos/banner2.jpeg';
import s3 from '../Photos/banner3.jpeg';
import s4 from '../Photos/banner4.jpeg';
import s5 from '../Photos/banner5.jpeg';

const partners = [s1, s2, s3, s4, s5];

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 text-xl z-10 bg-white p-3 rounded-full shadow-lg"
    onClick={onClick}
  >
    <FaChevronLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 text-xl z-10 bg-white p-3 rounded-full shadow-lg"
    onClick={onClick}
  >
    <FaChevronRight />
  </button>
);

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full pt-18 py-4 overflow-visible"> 
      <p className="text-center mb-6 text-lg font-semibold px-4">
        Welcome to CouponDunia - Indias Trusted Coupons, Offers & Cashback Website
      </p>
      <div className="w-full px-4 md:px-8 relative ">
        <Slider {...settings}>
          {partners.map((logo, index) => (
            <div key={index} className=" md:px-4 flex justify-center">
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="w-full min-h-[180px] max-h-[300px] object-cover rounded-lg shadow-md "
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
