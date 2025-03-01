import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import categories from "../assets/categoryData/CategoriesData.js";

const CategoryDetails = () => {
  const { id, brand } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const hideBrands = queryParams.get("hideBrands") === "true";

  const initialCategory = categories.find((cat) => cat.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [selectedBrand, setSelectedBrand] = useState(
    initialCategory?.name || ""
  );
  const [availableTags, setAvailableTags] = useState(
    initialCategory?.data || []
  );
  const [selectedTag, setSelectedTag] = useState("All");

  if (!initialCategory) {
    return (
      <h2 className="text-center text-2xl font-bold mt-10">
        Category Not Found
      </h2>
    );
  }

  return (
    <div className="p-4 sm:p-8">
      {brand && (
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          {brand} Coupons
        </h2>
      )}

      {!hideBrands && (
        <div className="flex flex-wrap items-center gap-4 mb-4 justify-center">
          <h2 className="font-semibold text-lg">Sort By Brands</h2>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedBrand(cat.name);
                setAvailableTags(cat.data);
                setSelectedTag("All");
              }}
              className={`px-3 py-1 rounded-full border border-gray-300 cursor-pointer hover:bg-gray-200 transition ${
                selectedBrand === cat.name
                  ? "bg-gray-400 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      )}

      <h1 className="text-2xl font-bold text-center mt-7 mb-5 capitalize">
        {selectedBrand} Offers
      </h1>

      <div className="flex flex-wrap items-center gap-4 mb-4 justify-center">
        <h2 className="font-semibold text-lg">Sort By Tags</h2>
        <button
          onClick={() => setSelectedTag("All")}
          className={`px-3 py-1 rounded-full font-semibold transition ${
            selectedTag === "All"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          All
        </button>
        {availableTags.map((tag, index) => (
          <button
            key={index}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full border border-gray-300 cursor-pointer hover:bg-gray-200 transition ${
              selectedTag === tag
                ? "bg-gray-400 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="space-y-9 mt-15">
        {availableTags
          .filter((item) => selectedTag === "All" || item === selectedTag)
          .map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition flex flex-col text-center"
            >
              <h3 className="text-xl font-semibold flex items-center gap-2 justify-center">
                <span>🌟</span> {item}
              </h3>
              <p className="text-gray-600">
                Limited-time offers available for {item}!
              </p>
              <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-md text-lg hover:bg-red-600 transition">
                View Details
              </button>
            </div>
          ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Back to Categories
        </Link>
      </div>
    </div>
  );
};

export default CategoryDetails;
