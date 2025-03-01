import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useRef } from "react";
import valen from '../Photos/bannerhome.jpeg'

import data from "./data";

const Collection = () => {
  const [filteredProducts] = useState(data.Collections);
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

  return (
    <div className="p-4">
      <div className="my-10">
        <h2 className="text-2xl font-bold mb-4">
          Valentine&apos;s Day Special
        </h2>
        <img src={valen} alt="img"></img>
      </div>
      <h2 className="text-2xl font-bold mb-4">Cupid&apos;s Collection</h2>
      <div className="relative flex items-center">
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 bg-white rounded-full shadow-md p-2 text-gray-700 hover:bg-gray-100"
        >
          <FaChevronLeft size={20} />
        </button>

        <div
          ref={containerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory bike"
        >
          {filteredProducts.map((product, index) => (
            <div
              key={product.id || index}
              className="min-w-[250px] bg-white shadow-md rounded-md flex-shrink-0 cursor-pointer snap-center"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <div className="bg-gray-100 p-2">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-teal-500 font-medium">{product.discount}</p>
                <p className="font-medium">{product.price}</p>
                <p className="text-xs">{product.tag}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 bg-white rounded-full shadow-md p-2 text-gray-700 hover:bg-gray-100"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Collection;
