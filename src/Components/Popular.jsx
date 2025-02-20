import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useRef } from "react";
import data from "./data";

const Popular = () => {
  const [activeTab, setActiveTab] = useState("Best Offers");
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  const tabDataMap = {
    "Best Offers": data.Offers,
    "CD Exclusive": data.Exclusive,
    "People Are Currently Using": data.Using,
  };

  const currentData = tabDataMap[activeTab] || [];

  return (
    <div className="p-6 relative w-full max-w-7xl mx-auto">

      <h2 className="text-2xl font-bold mb-6">Popular Offers</h2>

      {/* Tab Buttons */}
      <div className="flex mb-4 flex-wrap gap-2">
        {["Best Offers", "CD Exclusive", "People Are Currently Using"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-medium ${activeTab === tab ? "border-b-2 border-teal-500 text-teal-500" : "text-gray-600"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-3 text-gray-700 hover:bg-gray-100"
        >
          <FaChevronLeft size={20} />
        </button>

        <div
          ref={containerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-8 sm:px-12 bike"
        >
          {currentData.map((product) => (
            <div
              key={product.id}
              className="min-w-[250px] sm:min-w-[280px] md:min-w-[320px] lg:min-w-[350px] bg-white shadow-md rounded-md flex-shrink-0 cursor-pointer snap-center p-4">
              <div className="bg-gray-100 p-2 rounded-md">
                <h3 className="text-lg font-semibold mb-2">{product.price}</h3>
                <p className="text-teal-500 font-medium">{product.offer}</p>
                <button className="border text-white px-3 py-1 bg-red-500 mt-2 rounded-md">
                  {product.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-3 text-gray-700 hover:bg-gray-100"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Popular;
