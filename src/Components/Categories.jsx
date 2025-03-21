import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import categories from "../assets/categoryData/CategoriesData.js";
import categoryAPIs from "../assets/categoryData/categoryAPIs";

const Categories = ({ selectedStore }) => {
  const categoryRefs = useRef({});
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [categoryData, setCategoryData] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    if (selectedStore) {
      const filtered = categories.filter(category => category.store === selectedStore);
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories(categories);
    }
  }, [selectedStore]);

  const fetchCategoryData = async (categoryName) => {
    const api = categoryAPIs[categoryName] || categoryAPIs.default;
    try {
      const response = await axios.get(api);
      setCategoryData((prevData) => ({ ...prevData, [categoryName]: response.data.slice(0, 10) }));
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  const handleCategoryClick = (categoryName) => {
    fetchCategoryData(categoryName);
    navigate(`/category-offers/${encodeURIComponent(categoryName)}`);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6 bg-gradient-to-b from-gray-100 to-gray-200">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Categories</h2>

      {/* Dynamic Categories Grid */}
      <div className="grid grid-cols-3 gap-4 md:gap-8">
        {filteredCategories.map((category) => (
          <div
            key={`category-card-${category.id}`}
            className="flex flex-col items-center justify-center p-4 border-4 border-solid border-[#D4AF37] rounded-lg shadow-lg cursor-pointer transition-all transform hover:scale-105 hover:shadow-2xl hover:border-[#B68A3D] bg-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600"
            onClick={() => handleCategoryClick(category.name)}
          >
            <span className="text-5xl text-[#D4AF37]">{category.icon}</span>
            <h3 className="mt-2 font-semibold text-lg text-gray-800">{category.name}</h3>
            <p className="text-sm text-gray-500">{categoryData[category.name]?.length || category.offers} Offers</p>
          </div>
        ))}
      </div>

      {/* Categories Sections */}
      <div className="mt-10">
        {filteredCategories.map((category) => (
          <div
            key={`category-section-${category.id}`}
            ref={(el) => (categoryRefs.current[category.id] = el)}
            className="mt-12 rounded-xl p-8 shadow-2xl bg-white w-full relative border-4 border-solid border-[#D4AF37] hover:border-[#B68A3D]"
          >
            <h2 className="text-xl font-bold mb-6 text-center text-gray-900">
              {category.name} Offers
            </h2>

            {/* Slider Component */}
            <Slider
              {...settings}
              className="relative px-2 sm:px-4 md:px-8 overflow-visible gap-4 mb-2"
            >
              {(categoryData[category.name] || category.data).map((item, index) => (
                <div
                  key={`item-${category.id}-${index}`}
                  className="p-4 border-4 border-solid border-[#D4AF37] rounded-lg shadow-lg bg-white hover:shadow-2xl transition-all transform hover:scale-105 hover:border-[#B68A3D]"
                >
                  <div className="w-full h-[200px] relative mb-4">
                    <img
                      src={item.image || "default-image.jpg"}
                      alt={`Image for ${item.name}`}
                      className="object-contain w-full h-full rounded-lg"
                      aria-label={`Image for ${item.name}`}
                    />
                  </div>
                  <h3 className="font-semibold text-center text-lg text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 text-center mt-2">
                    A description about {item.name} will go here.
                  </p>
                  <button className="bg-[#D4AF37] text-white rounded-lg p-2 mt-4 hover:bg-[#B68A3D] transition text-sm">
                    View Details
                  </button>
                </div>
              ))}
            </Slider>

            {/* Explore Now Button */}
            <Link
              to={`/category-offers/${encodeURIComponent(category.name)}?hideBrands=true`}
              state={{ categoryData: categoryData[category.name] || [] }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-[#B68A3D] text-white rounded-lg p-3 text-sm w-full sm:w-auto block text-center mt-6 sm:mt-0 sm:absolute sm:bottom-4 sm:right-4 hover:bg-[#D4AF37] transition"
            >
              Explore Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
