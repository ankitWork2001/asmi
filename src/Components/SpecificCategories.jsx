import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import categoriesSpecial from "../assets/categoryData/categoryAPIs";

const SpecificCategories = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [offers, setOffers] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const categoryData = categoriesSpecial.find(
      (category) => category.name.toLowerCase() === categoryName.toLowerCase()
    );

    if (categoryData) {
      setOffers(categoryData.data);
    } else {
      setOffers([]);
    }
  }, [categoryName]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const topCategories = [
    "Electronics",
    "Web Hosting",
    "Beauty And Health",
    "Travel",
    "Clothing & Accessories",
    "Education",
    "Home Appliances",
    "Services"
  ];

  const trendingOffers = offers.slice(0, 3).map((offer) => ({
    ...offer,
    image:
      offer.image ||
      offers[Math.floor(Math.random() * offers.length)]?.image ||
      "default-image.jpg",
  }));

  return (
    <div className="p-8 bg-gradient-to-b from-[#F8F6F0] to-[#E8E6DC] min-h-screen flex gap-8">
      {/* Sidebar */}
      <div className="w-1/4 p-6 bg-white shadow-xl rounded-2xl border border-gray-200 flex flex-col space-y-8">
        {/* Filter Offers */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">🎯 Filter Offers</h3>
          <select
            className="w-full p-3 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="All">All Offers</option>
            <option value="Discount">Discount Offers</option>
            <option value="Cashback">Cashback Offers</option>
            <option value="Limited">Limited Time Offers</option>
          </select>
        </div>

        {/* Trending Offers */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">🔥 Trending Offers</h3>
          <div className="space-y-4">
            {trendingOffers.length > 0 ? (
              trendingOffers.map((offer, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition">
                  <img src={offer.image} alt={offer.name} className="w-14 h-14 object-cover rounded-lg mr-3" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">{offer.name}</h4>
                    <p className="text-xs text-gray-600">{offer.offers}% {offer.type}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No trending offers.</p>
            )}
          </div>
        </div>

        {/* Top Categories */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">📌 Top Categories</h3>
          <ul className="space-y-2">
            {topCategories.map((category, index) => (
              <li
                key={index}
                className="p-2 bg-gray-100 rounded-lg text-gray-700 font-medium cursor-pointer hover:bg-[#D4AF37] hover:text-white transition"
                onClick={() => navigate(`/categories/${category.toLowerCase()}`)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Offers Section */}
      <div className="flex-1">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          {categoryName} Offers
        </h2>

        {offers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers
              .filter((offer) => filter === "All" || offer.type === filter)
              .map((offer, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-300 rounded-3xl shadow-lg bg-white hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col items-center"
                >
                  <img
                    src={offer.image || "default-image.jpg"}
                    alt={offer.name}
                    className="w-full h-52 object-cover rounded-xl mb-4 shadow-md"
                  />
                  <h3 className="font-semibold text-xl text-gray-900 text-center">{offer.name}</h3>
                  <p className="text-gray-600 text-center mt-2 px-2">
                    {offer.description || "Exciting offer available!"}
                  </p>
                  <span className="mt-3 px-4 py-1 bg-[#FFD700] text-white text-sm font-semibold rounded-full shadow-md">
                    {offer.offers}% {offer.type}
                  </span>
                  <button className="mt-4 bg-[#D4AF37] text-white px-6 py-2 rounded-lg hover:bg-[#B68A3D] transition font-semibold shadow-md">
                    View Offer
                  </button>
                </div>
              ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">No offers available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default SpecificCategories;
