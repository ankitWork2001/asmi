import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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
  const [countdown, setCountdown] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [reviewModalOffer, setReviewModalOffer] = useState(null);
  const [shareModalOffer, setShareModalOffer] = useState(null);
  const [recommendedOffers, setRecommendedOffers] = useState([]);

  // Load favorites from localStorage
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);

  // Persist favorites to localStorage when updated
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Countdown timer logic (24 hours from page load)
  useEffect(() => {
    const deadline = new Date();
    deadline.setHours(deadline.getHours() + 24);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;
      if (distance < 0) {
        clearInterval(interval);
        setCountdown("Expired");
      } else {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setCountdown(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch offers and enrich with dummy ratings/reviews if missing
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchOffers = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        const enrichedData = data
          .map((offer) => ({
            ...offer,
            // If rating is an object, leave it; otherwise add a dummy rating.
            rating: offer.rating || (Math.random() * 5).toFixed(1),
            reviews: offer.reviews || Math.floor(Math.random() * 100),
            reviewDetails: offer.reviewDetails || [
              "Great product!",
              "Really satisfied with the quality.",
              "Worth the price.",
            ]
          }))
          .sort(() => 0.5 - Math.random())
          .slice(0, 6);
        setOffers(enrichedData);
        setFilteredOffers(enrichedData);
      } catch (error) {
        console.error("Error fetching offers:", error);
      }
    };
    if (api) fetchOffers();
  }, [api]);

  // Fetch categories
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

  // Fetch trending offers
  useEffect(() => {
    const fetchTrendingOffers = async () => {
      let url = "https://api.escuelajs.co/api/v1/products";
      if (selectedCategory) {
        url += `?categoryId=${selectedCategory}`;
      }
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTrendingOffers(data.slice(0, 5));
      } catch (error) {
        console.error("Error fetching trending offers:", error);
      }
    };
    fetchTrendingOffers();
  }, [selectedCategory]);

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

  // Toggle favorite for an offer
  const toggleFavorite = (offerId) => {
    if (favorites.includes(offerId)) {
      setFavorites(favorites.filter((id) => id !== offerId));
    } else {
      setFavorites([...favorites, offerId]);
    }
  };

  // Helper to display rating and review count correctly
  const getRatingDisplay = (offer) => {
    if (typeof offer.rating === "object") {
      return { displayRating: offer.rating.rate, displayReviews: offer.rating.count };
    }
    return { displayRating: offer.rating, displayReviews: offer.reviews };
  };

  // Calculate personalized recommendations based on favorites
  useEffect(() => {
    if (favorites.length === 0) {
      // If no favorites, use 3 random offers from the fetched list
      setRecommendedOffers(offers.slice(0, 3));
    } else {
      // Use the category of the first favorite to filter similar offers
      const favoriteOffer = offers.find((offer) => favorites.includes(offer.id));
      if (favoriteOffer && favoriteOffer.category) {
        const recs = offers.filter(
          (offer) =>
            offer.category &&
            offer.category.id === favoriteOffer.category.id &&
            !favorites.includes(offer.id)
        );
        setRecommendedOffers(recs.slice(0, 3));
      } else {
        setRecommendedOffers(offers.slice(0, 3));
      }
    }
  }, [favorites, offers]);

  // Social share modal handler (opens when share button clicked)
  const openShareModal = (offer) => {
    setShareModalOffer(offer);
  };

  // Copy link to clipboard
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert("Link copied to clipboard!"))
      .catch(() => alert("Failed to copy link."));
  };

  return (
    <div className="pt-24 p-8 bg-gradient-to-b from-gray-100 to-white min-h-screen flex gap-8">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-6 rounded-xl shadow-lg border border-gray-300 sticky top-24 flex flex-col gap-6">
        {/* Promotional Banner */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-4 text-center shadow-md">
          <h3 className="text-xl font-bold text-white">Big Sale Today!</h3>
          <p className="text-white text-sm mt-1">Up to 50% off on select items.</p>
        </div>

        {/* Filter Offers */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Filter Offers</h3>
          <label className="font-medium block mt-3">Category</label>
          <select
            className="w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-orange-400"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          <label className="font-medium block mt-3">Max Price</label>
          <input
            type="number"
            className="w-full p-3 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-orange-400"
            placeholder="$"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <button
            className="mt-4 w-full bg-yellow-500 text-white p-3 rounded-xl hover:bg-yellow-600 transition-all"
            onClick={fetchFilteredProducts}
          >
            Apply Filters
          </button>
        </div>

        {/* Featured Deal Section */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-inner">
          <h4 className="text-lg font-bold text-gray-800 mb-2">Deal of the Day</h4>
          <div className="flex items-center gap-3">
            <img
              src="https://img.freepik.com/free-vector/abstract-sale-promotion-banner-template_23-2148222727.jpg?uid=R152357504&ga=GA1.1.1565925887.1742290651&semt=ais_keywords_boost"
              alt="Deal"
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div>
              <p className="text-sm font-semibold text-gray-700">Exclusive Offer</p>
              <span className="text-xs text-orange-600 font-bold">Only $19.99</span>
            </div>
          </div>
        </div>

        {/* Extra UI Section: Trending Offers Carousel */}
        <div className="bg-gray-100 p-4 rounded-xl shadow-inner">
          <h4 className="text-lg font-bold text-gray-800 mb-2">Trending Offers</h4>
          <motion.div
            className="flex gap-4 overflow-x-auto scrollbar-hide"
            animate={{ x: [0, -100, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {trendingOffers.length > 0 ? (
              trendingOffers.map((offer) => (
                <div
                  key={offer.id}
                  className="min-w-[150px] bg-gradient-to-r from-yellow-400 to-orange-400 p-2 rounded-lg"
                >
                  <img
                    src={offer.images?.[0]}
                    alt={offer.title}
                    className="w-full h-16 object-cover rounded-lg"
                  />
                  <p className="text-xs text-white text-center mt-1">{offer.title}</p>
                </div>
              ))
            ) : (
              <p className="text-xs text-gray-500">No trending offers</p>
            )}
          </motion.div>
        </div>

        {/* Limited Time Offer Section with Countdown */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-inner">
          <h4 className="text-lg font-bold text-gray-800 mb-2">Limited Time Offer</h4>
          <p className="text-sm text-gray-600">Hurry up! Offer ends in:</p>
          <div className="mt-2 text-center font-bold text-orange-600 text-xl">{countdown}</div>
        </div>

        {/* Promotional / Newsletter Section */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl p-6 text-center shadow-xl">
          <h4 className="text-2xl font-bold text-white">Don't Miss Out!</h4>
          <p className="text-white mt-2">Subscribe now for exclusive offers and updates.</p>
          <div className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Your email"
              className="w-2/3 p-2 rounded-l-full border-0 focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-orange-600 font-semibold px-4 rounded-r-full hover:bg-gray-200 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">{storeName} Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map((offer) => {
            const { displayRating, displayReviews } = getRatingDisplay(offer);
            return (
              <motion.div
                key={offer.id}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 relative flex flex-col"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <img
                  src={offer.images?.[0]}
                  alt={offer.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 flex-grow">{offer.title}</h3>
                <div className="flex items-center mt-2 justify-between">
                  {/* Ratings & Reviews */}
                  <div className="flex items-center">
                    <span className="text-yellow-500">★ {displayRating}</span>
                    <span className="text-xs text-gray-600 ml-1">({displayReviews} reviews)</span>
                    <button
                      className="ml-2 text-blue-500 text-xs underline"
                      onClick={() => setReviewModalOffer(offer)}
                    >
                      View Reviews
                    </button>
                  </div>
                  {/* Favorite Icon */}
                  <button onClick={() => toggleFavorite(offer.id)}>
                    {favorites.includes(offer.id) ? (
                      <span className="text-red-500 text-xl">♥</span>
                    ) : (
                      <span className="text-gray-400 text-xl">♡</span>
                    )}
                  </button>
                </div>
                <p className="text-gray-700 mt-1 font-medium">
                  Price: <span className="text-orange-600 font-bold">${offer.price}</span>
                </p>
                <div className="mt-4 flex gap-2">
                  <button className="w-1/2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-sm font-medium rounded-xl py-2 hover:shadow-md hover:scale-105 transition-all">
                    View Offer
                  </button>
                  <button
                    className="w-1/2 bg-white border border-orange-600 text-orange-600 text-sm font-medium rounded-xl py-2 hover:bg-orange-100 transition-all"
                    onClick={() => openShareModal(offer)}
                  >
                    Share
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Personalized Recommendations */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Recommended for You</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedOffers.map((offer) => {
              const { displayRating, displayReviews } = getRatingDisplay(offer);
              return (
                <motion.div
                  key={offer.id}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-300 relative flex flex-col"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <img
                    src={offer.images?.[0]}
                    alt={offer.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 flex-grow">{offer.title}</h3>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500">★ {displayRating}</span>
                    <span className="text-xs text-gray-600 ml-1">({displayReviews} reviews)</span>
                  </div>
                  <p className="text-gray-700 mt-1 font-medium">
                    Price: <span className="text-orange-600 font-bold">${offer.price}</span>
                  </p>
                  <button className="mt-4 w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-sm font-medium rounded-xl py-3 hover:shadow-md hover:scale-105 transition-all">
                    View Offer
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Review Details Modal */}
      {reviewModalOffer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-11/12 md:w-2/3 lg:w-1/2 relative">
            <button
              className="absolute top-2 right-2 text-gray-700 text-xl"
              onClick={() => setReviewModalOffer(null)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{reviewModalOffer.title} - Reviews</h3>
            <ul className="list-disc pl-5">
              {reviewModalOffer.reviewDetails.map((review, index) => (
                <li key={index} className="text-gray-700 mb-2">
                  {review}
                </li>
              ))}
            </ul>
            <button
              className="mt-4 w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-sm font-medium rounded-xl py-3 hover:shadow-md hover:scale-105 transition-all"
              onClick={() => setReviewModalOffer(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {shareModalOffer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-11/12 md:w-2/3 lg:w-1/2 relative">
            <button
              className="absolute top-2 right-2 text-gray-700 text-xl"
              onClick={() => setShareModalOffer(null)}
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Share {shareModalOffer.title}</h3>
            <div className="flex justify-around">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${shareModalOffer.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
              >
                Twitter
              </a>
              <button
                onClick={copyLink}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                Copy Link
              </button>
            </div>
            <button
              className="mt-4 w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-sm font-medium rounded-xl py-3 hover:shadow-md hover:scale-105 transition-all"
              onClick={() => setShareModalOffer(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offers;
