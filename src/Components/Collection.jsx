import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import valen from "../Photos/bannerhome.jpeg";
import data from "./data";

const Collection = () => {
  const [filteredProducts] = useState(data.Collections);
  const containerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    checkScrollButtons();
  }, []);

  const checkScrollButtons = () => {
    if (containerRef.current) {
      setShowLeftButton(containerRef.current.scrollLeft > 0);
      setShowRightButton(
        containerRef.current.scrollLeft + containerRef.current.clientWidth <
          containerRef.current.scrollWidth
      );
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
      setTimeout(checkScrollButtons, 300);
    }
  };

  return (
    <div className="p-4">
      {/* Valentine's Day Banner */}
      <div className="my-10 relative">
        <h2 className="text-2xl font-bold mb-4">Valentine&apos;s Day Special</h2>
        <img src={valen} alt="Valentine's Offer" className="w-full rounded-lg shadow-lg" />
      </div>

      {/* Cupid's Collection Section */}
      <h2 className="text-2xl font-bold mb-4">Cupid&apos;s Collection</h2>
      <div className="relative flex items-center">
        {/* Left Scroll Button */}
        {showLeftButton && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-10 bg-white rounded-full shadow-md p-2 text-gray-700 hover:bg-gray-100 transition duration-300"
          >
            <FaChevronLeft size={20} />
          </button>
        )}

        {/* Scrollable Product List */}
        <div
          ref={containerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
          onScroll={checkScrollButtons}
        >
          {filteredProducts.map((product, index) => (
            <div
              key={product.id || index}
              className="min-w-[250px] bg-white shadow-md rounded-lg flex-shrink-0 cursor-pointer snap-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="bg-gray-100 p-3 rounded-b-lg">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-teal-500 font-medium">{product.discount}</p>
                <p className="font-medium">{product.price}</p>
                <p className="text-xs text-gray-600">{product.tag}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        {showRightButton && (
          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 bg-white rounded-full shadow-md p-2 text-gray-700 hover:bg-gray-100 transition duration-300"
          >
            <FaChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Collection;
