import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const categoryAPIs = {
  "Travel": "https://www.freetestapi.com/api/v1/destinations?sort=name&order=desc",
  "Beauty and Skincare": "https://makeup-api.herokuapp.com/api/v1/products",
  "Clothing and Accessories": "https://makeup-api.herokuapp.com/api/v1/products",
  "Electronics": "https://fakestoreapiserver.reactbd.com/walmart",
  "Education": "http://universities.hipolabs.com/search?country=United+States",
  "Services": "https://www.freetestapi.com/api/v1/destinations?sort=name&order=desc",
  "Women's Clothing": "https://dummyjson.com/products",
  "Home Appliances": "https://api.escuelajs.co/api/v1/products",
  "default": "https://api.escuelajs.co/api/v1/categories"
};

const CategoryOffersPage = () => {
  const { categoryName } = useParams();
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = categoryAPIs[categoryName] || categoryAPIs["default"];

    console.log(`Fetching offers from: ${apiUrl}`);

    axios.get(apiUrl)
      .then((response) => {
        setOffers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching offers:", error);
        setLoading(false);
      });

  }, [categoryName]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        {categoryName} Offers
      </h2>

      {loading ? (
        <div className="flex justify-center">
          <p className="text-lg text-gray-700">Loading offers...</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
              {offer.image ? (
                <img src={offer.image} alt={offer.name || offer.title} className="w-full h-40 object-cover" />
              ) : (
                <div className="w-full h-40 bg-gray-300 flex items-center justify-center text-gray-600">
                  No Image
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {offer.name || offer.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {offer.description || "Special Offer Available!"}
                </p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                  View Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryOffersPage;
