import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import categories from "../assets/categoryData/CategoriesData.js";

const CategoryOffers = () => {
  const { id } = useParams(); // Get category ID from URL
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const selectedCategory = categories.find((cat) => cat.id.toString() === id);
    if (selectedCategory) {
      setOffers(selectedCategory.data);
    }
  }, [id]);

  if (offers.length === 0) {
    return <div className="text-center p-10 text-gray-700">No Offers Available</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Offers for {id}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {offers.map((offer, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-lg bg-white">
            <img src={offer.image || "default-image.jpg"} alt={offer.name} className="w-full h-40 object-contain" />
            <h3 className="text-lg font-semibold mt-2">{offer.name}</h3>
            <p className="text-sm text-gray-600">{offer.description || "Special deal available!"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryOffers;
