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
  const [trendingOffers, setTrendingOffers] = useState([]);
  const [currentTrendingIndex, setCurrentTrendingIndex] = useState(0);
  const [expandedOffer, setExpandedOffer] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchOffers = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        setOffers(data.sort(() => 0.5 - Math.random()).slice(0, 6));
        setFilteredOffers(data);
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };
    if (api) fetchOffers();
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

  useEffect(() => {
    const fetchTrendingOffers = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await response.json();
        setTrendingOffers(data.slice(0, 5));
      } catch (error) {
        console.error("Error fetching trending offers:", error);
      }
    };
    fetchTrendingOffers();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrendingIndex((prevIndex) => (prevIndex + 1) % trendingOffers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [trendingOffers]);

  const fetchFilteredProducts = async () => {
    let url = "https://api.escuelajs.co/api/v1/products";
    let params = [];
    if (selectedCategory) params.push(`categoryId=${selectedCategory}`);
    if (maxPrice) params.push(`price_lte=${maxPrice}`);
    if (sortBy === "newest") params.push("_sort=creationAt&_order=desc");
    if (sortBy === "oldest") params.push("_sort=creationAt&_order=asc");
    if (params.length) url += "?" + params.join("&");
    try {
      const response = await fetch(url);
      const data = await response.json();
      setFilteredOffers(data);
    } catch (error) {
      console.error("Error fetching filtered products:", error);
    }
  };

  return (
    <div className="pt-24 p-8 bg-gradient-to-br from-gray-100 to-blue-50 min-h-screen flex gap-8">
      <div className="w-1/4 bg-white p-6 rounded-2xl shadow-xl border border-gray-300 h-fit sticky top-24 flex flex-col gap-6">
        <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Filter Offers</h3>
        <label className="font-medium block mt-3">Category</label>
        <select className="w-full p-3 border rounded-lg bg-gray-50" onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <label className="font-medium block mt-3">Max Price</label>
        <input type="number" className="w-full p-3 border rounded-lg bg-gray-50" placeholder="$" onChange={(e) => setMaxPrice(e.target.value)} />
        <button className="mt-4 w-full bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-all" onClick={fetchFilteredProducts}>Apply Filters</button>
      </div>

      <div className="w-3/4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">{storeName} Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map((offer) => (
            <div key={offer.id} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all flex flex-col h-full">
              <img src={offer.images?.[0]} alt={offer.title} className="w-full h-40 object-cover rounded-lg mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 flex-grow">{offer.title}</h3>
              <p className="text-gray-700 mt-1 font-medium">Price: ${offer.price}</p>
              <p className="text-sm text-gray-600 mt-2 flex-grow">
                {expandedOffer === offer.id ? offer.description : offer.description?.slice(0, 80)}
                {offer.description?.length > 80 && (
                  <button className="text-blue-500 ml-2" onClick={() => setExpandedOffer(expandedOffer === offer.id ? null : offer.id)}>
                    {expandedOffer === offer.id ? "Read Less" : "Read More"}
                  </button>
                )}
              </p>
              <button className="mt-auto w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-all">View Offer</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
