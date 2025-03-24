import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import categories from "../assets/categoryData/CategoriesData.js";

const CategoryOffersPage = () => {
  const { categoryName } = useParams(); // This is actually the category ID
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    console.log("Category ID from URL:", categoryName);
    console.log("Available Categories:", categories);

    if (!categoryName) {
      setOffers([]);
      setLoading(false);
      return;
    }

    // Convert categoryName to number because IDs are numbers
    const categoryId = parseInt(categoryName, 10);

    // Find the category using its ID
    const selectedCategory = categories.find((category) => category.id === categoryId);

    if (selectedCategory && Array.isArray(selectedCategory.data)) {
      setCategory(selectedCategory);
      setOffers(selectedCategory.data);
    } else {
      setOffers([]);
    }

    setLoading(false);
  }, [categoryName]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        {category ? category.name : "Offers"}
      </h2>

      {loading ? (
        <div className="flex justify-center">
          <p className="text-lg text-gray-700">Loading offers...</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {offers.length > 0 ? (
            offers.map((offer, index) => (
              <div
                key={offer.name ? offer.name.replace(/\s+/g, '-') : `offer-${index}`}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
              >
                {offer.image ? (
                  <img
                    src={offer.image}
                    alt={offer.name || "Offer Image"}
                    className="w-full h-40 object-cover"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-300 flex items-center justify-center text-gray-600">
                    No Image
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {offer.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {offer.description || "Special Offer Available!"}
                  </p>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                    View Deal
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center p-10 text-gray-700">No Offers Available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryOffersPage;
