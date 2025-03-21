import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Offers = () => {
  const location = useLocation();
  const { storeName, api } = location.state || {};
  const [offers, setOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [expandedOffer, setExpandedOffer] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchOffers = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        const randomOffers = data.sort(() => 0.5 - Math.random()).slice(0, 5);
        setOffers(randomOffers);
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };

    if (api) {
      fetchOffers();
    }
  }, [api]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const fetchFilteredProducts = async () => {
    let url = "https://api.escuelajs.co/api/v1/products";
    if (selectedCategory || maxPrice || sortBy) {
      url += "?";
      const params = [];
      if (selectedCategory) params.push(`categoryId=${selectedCategory}`);
      if (maxPrice) params.push(`price_lte=${maxPrice}`);
      if (sortBy === "newest") params.push("_sort=creationAt&_order=desc");
      if (sortBy === "oldest") params.push("_sort=creationAt&_order=asc");
      url += params.join("&");
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      setFilteredOffers(data);
    } catch (error) {
      console.error("Error fetching filtered products:", error);
    }
  };

  return (
    <div className="pt-24 p-8 bg-white min-h-screen flex gap-8">
      {/* Filter Section */}
      <div className="w-1/4 bg-gray-100 p-6 rounded-lg shadow-md border border-gray-300 h-fit sticky top-24">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 border-b pb-2">Filter By</h3>
        <div>
          <label className="font-medium">Category</label>
          <select
            className="w-full p-2 border rounded mt-2 bg-white"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-4">
          <label className="font-medium">Max Price</label>
          <input
            type="number"
            className="w-full p-2 border rounded mt-2 bg-white"
            placeholder="Enter max price"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="font-medium">Sort By</label>
          <select
            className="w-full p-2 border rounded mt-2 bg-white"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">None</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
        <button
          className="mt-4 w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-all"
          onClick={fetchFilteredProducts}
        >
          Apply Filters
        </button>
      </div>

      {/* Offers Section */}
      <div className="w-3/4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">{storeName} Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(filteredOffers.length > 0 ? filteredOffers : offers).map((offer) => (
            <div
              key={offer.id}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out transform"
            >
              <img
                src={offer.images?.[0] || offer.image}
                alt={offer.title}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h3 className="text-md font-semibold text-gray-900">{offer.title}</h3>
              <p className="text-gray-700 text-sm mt-1">${offer.price}</p>
              {offer.description.length > 80 ? (
                <>
                  <p className="text-sm text-gray-600 mt-2">
                    {expandedOffer === offer.id ? offer.description : `${offer.description.slice(0, 80)}...`}
                  </p>
                  <button
                    className="text-blue-600 font-medium mt-1 hover:underline"
                    onClick={() => setExpandedOffer(expandedOffer === offer.id ? null : offer.id)}
                  >
                    {expandedOffer === offer.id ? "Show Less" : "Read More"}
                  </button>
                </>
              ) : (
                <p className="text-sm text-gray-600 mt-2">{offer.description}</p>
              )}
              <button className="mt-3 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-all">
                Grab Deal
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
