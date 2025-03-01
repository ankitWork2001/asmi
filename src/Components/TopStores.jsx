import { useNavigate } from "react-router-dom";

const stores = [
  {
    name: "Amazon",
    img: "amazon.png",
    offer: "Upto 6.5% Voucher Rewards",
    featured: true,
  },
  { name: "Flipkart", img: "flipkart.png", offer: "Upto 7%" },
  { name: "Myntra", img: "myntra.png", offer: "Upto 6.7%" },
  { name: "AJIO", img: "ajio.png", offer: "Upto 10.1%" },
  { name: "Cleartrip", img: "cleartrip.png", offer: "Upto ₹220" },
  { name: "Dell", img: "dell.png", offer: "Upto 6.3%" },
  { name: "Nykaa", img: "nykaa.png", offer: "Upto 5.4%" },
  { name: "MakeMyTrip", img: "makemytrip.png", offer: "Upto ₹150" },
  { name: "Booking.com", img: "booking.png", offer: "" },
  { name: "Samsung", img: "samsung.png", offer: "Upto 2.5%" },
];

const TopStores = () => {
  const navigate = useNavigate();

  const handleStoreClick = (storeName) => {
    const categoryId = 1;
    navigate(`/category-details/${categoryId}/${storeName}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Top Stores</h2>
      <div className="bg-blue-100 p-6 rounded-xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {stores.map((store, index) => (
            <div
              key={index}
              className={`p-4 bg-white rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer ${
                store.featured
                  ? "md:col-span-2 row-span-2 p-6 border-2 border-gray-300"
                  : ""
              }`}
              onClick={() => handleStoreClick(store.name)}
            >
              <p className="font-semibold">{store.name}</p>
              {store.offer && (
                <span className="text-green-600 text-sm font-medium">
                  {store.offer}
                </span>
              )}
            </div>
          ))}

          <div className="p-4 bg-white rounded-lg shadow-md flex justify-center items-center hover:bg-gray-100 transition duration-300">
            <span className="text-blue-600 font-semibold">View All</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStores;
