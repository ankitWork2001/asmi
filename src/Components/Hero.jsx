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
    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black/30 hover:bg-black/60 p-4 rounded-full transition duration-300"
    onClick={onClick}
  >
    <FaChevronLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 bg-black/30 hover:bg-black/60 p-4 rounded-full transition duration-300"
    onClick={onClick}
  >
    <FaChevronRight />
  </button>
);

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 2500, // Slower transition
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Longer pause on each slide
    cssEase: "ease-in-out", // Smooth transition
    pauseOnHover: true, // Stops when hovered
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="relative w-full pt-18 py-4 overflow-hidden">
      <p className="text-center mb-6 text-2xl font-bold px-4 text-gray-800 tracking-wide">
        Welcome to <span className="text-yellow-500">CouponDunia</span> - India’s Trusted Coupons, Offers & Cashback Website
      </p>
      <div className="w-full px-6 md:px-12 relative">
        <Slider {...settings}>
          {partners.map((logo, index) => (
            <div key={index} className="px-2 flex justify-center">
              <div className="relative w-full overflow-hidden rounded-xl shadow-lg transition duration-500">
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="w-full min-h-[200px] max-h-[350px] object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-xl"></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
