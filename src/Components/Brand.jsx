import React from "react";

const brands = [
  { name: "Amazon", logo: "", reward: "Upto 6.5% Voucher Rewards" },
  { name: "Flipkart", logo: "", reward: "Upto 7%" },
  { name: "Myntra", logo: "", reward: "Upto 6.7%" },
  { name: "AJIO", logo: "", reward: "Upto 8%" },
  { name: "Cleartrip", logo: "", reward: "Upto ₹220" },
  { name: "Dell", logo: "", reward: "Upto 6.3%" },
  { name: "Nykaa", logo: "", reward: "Upto 5.4%" },
  { name: "MakeMyTrip", logo: "", reward: "Upto ₹150" },
  { name: "boAt", logo: "", reward: "Flat 5.2%" },
  { name: "Samsung", logo: "", reward: "Upto 2.5%" },
];

const Brand = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center text-center hover:shadow-lg transition"
            >
              {/* Logo Placeholder */}
              <div className="h-16 w-28 flex items-center justify-center">
                <img src={brand.logo} alt={brand.name} className="h-12" />
              </div>
              
              {/* Brand Name */}
              <p className="mt-2 font-semibold">{brand.name}</p>
              
              {/* Reward Text */}
              <p className="text-green-600 font-medium text-sm mt-1">
                {brand.reward}
              </p>
            </div>
          ))}
          
          {/* View All Button */}
          <div className="bg-white p-4 shadow-md rounded-lg flex items-center justify-center text-center text-blue-500 font-semibold hover:underline cursor-pointer">
            View All
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
