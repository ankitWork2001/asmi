import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const stores = [
  {
    name: "Amazon",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    offer: "Upto 6.5% Voucher Rewards",
    featured: true,
    description: "Shop from the world's largest marketplace with exclusive rewards.",
    api: "https://fakestoreapi.com/products",
  },
  {
    name: "Flipkart",
    img: "https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png",
    offer: "Upto 7%",
    description: "Best deals on mobiles, electronics, and fashion.",
    api: "https://fakestoreapi.com/products",
  },
  {
    name: "Myntra",
    img: "https://1000logos.net/wp-content/uploads/2022/08/Myntra-Logo.png",
    offer: "Upto 6.7%",
    description: "Trendy fashion & top brands, all in one place.",
    api: "https://fakestoreapi.com/products",
  },
  {
    name: "AJIO",
    img: "https://images.pexels.com/photos/6311622/pexels-photo-6311622.jpeg",
    offer: "Upto 10.1%",
    description: "Exclusive styles & premium brands with the best discounts.",
    api: "https://fakestoreapi.com/products",
  },
  {
    name: "Cleartrip",
    img: "https://images.pexels.com/photos/2102437/pexels-photo-2102437.jpeg",
    offer: "Upto ₹220",
    description: "Book flights & hotels at unbeatable prices.",
    api: "https://fakestoreapi.com/products",
  },
  {
    name: "Dell",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    offer: "Upto 6.3%",
    description: "Powerful laptops & desktops for all your needs.",
    api: "https://fakestoreapi.com/products",
  },
  {
    name: "Nykaa",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    offer: "Upto 5.4%",
    description: "Beauty & skincare with top-notch deals.",
    api: "https://fakestoreapi.com/products",
  },
  {
    name: "MakeMyTrip",
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    offer: "Upto ₹150",
    description: "Your perfect travel companion with big savings.",
    api: "https://fakestoreapi.com/products",
  },
  {
    name: "Booking.com",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
    offer: "",
    description: "Find the best hotels & stays at affordable rates.",
    api: "https://fakestoreapi.com/products",
  },
  {
    name: "Samsung",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    offer: "Upto 2.5%",
    description: "Latest tech gadgets & home appliances with discounts.",
    api: "https://fakestoreapi.com/products",
  },
];

const TopStores = () => {
  const navigate = useNavigate();

  const handleStoreClick = (store) => {
    navigate("/offers", { state: { storeName: store.name, api: store.api } });
  };

  return (
    <div className="p-8 bg-gradient-to-b from-gray-100 to-blue-50 min-h-screen">
      <h2 className="text-5xl font-extrabold text-blue-600 text-center drop-shadow-md">
        🏆 Top Stores for You!
      </h2>

      <div className="mt-10 bg-white p-10 rounded-3xl shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {stores.map((store, index) => (
            <div
              key={index}
              className={`relative p-6 bg-white rounded-xl shadow-md flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-200 border border-gray-200 hover:border-blue-600 cursor-pointer group ${
                store.featured
                  ? "md:col-span-2 row-span-2 p-10 bg-[#232F3E] border-2 border-yellow-500 shadow-lg text-white hover:shadow-xl hover:shadow-yellow-400"
                  : ""
              }`}
              onClick={() => handleStoreClick(store)}
            >
              <div className="relative">
                <img
                  src={store.img}
                  alt={store.name}
                  className="w-24 h-24 mb-4 object-contain drop-shadow-md transition-transform duration-300 group-hover:rotate-6"
                  data-tooltip-id={store.name}
                  data-tooltip-content={store.offer}
                />
                {store.offer && (
                  <Tooltip id={store.name} className="bg-blue-500 text-white text-sm px-2 py-1 rounded-lg" />
                )}
              </div>

              <p className="font-bold text-lg text-gray-800">{store.name}</p>
              {store.offer && <span className="text-green-700 font-medium text-sm mt-1">{store.offer}</span>}

              <p className="text-sm text-gray-600 text-center mt-3 leading-relaxed">
                {store.description}
              </p>
            </div>
          ))}

          <div className="p-6 bg-blue-100 rounded-2xl shadow-md flex justify-center items-center hover:bg-blue-200 transition duration-300 cursor-pointer">
            <span className="text-blue-600 font-semibold text-lg">View All</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStores;
