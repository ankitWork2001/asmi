import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useRef } from "react";

import data from "./data";

const Cashback = () => {
    const [filteredProducts] = useState(data.Cashback);
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
            <div className="bg-green-50 p-6 rounded">
                <h2 className="text-2xl font-bold mb-4">Cashback Increased</h2>
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
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="min-w-[250px] bg-white shadow-md rounded-md flex-shrink-0 cursor-pointer snap-center"

                            >
                                {/* <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              /> */}
                                <div className="bg-gray-100 p-2">
                                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                    <p className="">
                                        {product.status}
                                    </p>
                                    <p className="bg-green-100 p-2">
                                        {product.offer}
                                    </p>
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

            <div className="text-white bg-black text-center py-4 my-10 flex flex-col items-center justify-center px-6">
                <div className="max-w-lg">
                    <h2 className="text-xl">Signup to earn CD Cashback every time you shop</h2>
                    <p className="text-sm mt-1">Save real money over & above offers & discounts!</p>
                </div>
                <div className="mt-4">
                    <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition">
                        Signup for Free
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cashback;