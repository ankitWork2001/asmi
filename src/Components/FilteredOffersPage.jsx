import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FilteredOffersPage = () => {
  const { categoryId } = useParams();
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    // Fetch offers for the selected category
    fetch(`https://api.example.com/offers?category=${categoryId}`) // Replace with actual API
      .then((res) => res.json())
      .then((data) => setOffers(data))
      .catch((err) => console.error("Error fetching offers:", err));
  }, [categoryId]);

  return (
    <div className="p-6 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        {categoryId} Offers
      </h2>

      {offers.length === 0 ? (
        <p className="text-center text-gray-500">No offers available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.slice(0, 5).map((offer) => (
            <div
              key={offer.id}
              className="p-4 border-4 border-[#D4AF37] rounded-lg shadow-lg bg-white hover:shadow-2xl transform hover:scale-105"
            >
              <img
                src={offer.image || "default-image.jpg"}
                alt={offer.name}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-3 text-gray-800">
                {offer.name}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{offer.description}</p>
              <button className="bg-[#D4AF37] text-white rounded-lg p-2 mt-4 hover:bg-[#B68A3D] w-full">
                Get Offer
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilteredOffersPage;
