import { FaUniversity, FaWallet } from "react-icons/fa";
import bank1 from '../Photos/collection_icon-100x200 (1).jpg'
import bank2 from '../Photos/collection_icon-100x200 (2).jpg'
import bank3 from '../Photos/collection_icon-100x200 (3).jpg'
import bank4 from '../Photos/collection_icon-100x200 (4).jpg'
import bank5 from '../Photos/collection_icon-100x200 (5).jpg'
import bank6 from '../Photos/collection_icon-100x200 (6).jpg'
import bank7 from '../Photos/collection_icon-100x200 (7).jpg'
import bank8 from '../Photos/collection_icon-100x200 (8).jpg'
import bank9 from '../Photos/collection_icon-100x200 (9).jpg'
import bank10 from '../Photos/collection_icon-200x200.jpeg'
import bank11 from '../Photos/collection_icon-100x200.png'
import bank12 from '../Photos/collection_icon-100x200.jpg'
const bankOffers = [
  { name: "SBI", logo: bank1 },
  { name: "ICICI Bank", logo: bank2 },
  { name: "Citibank", logo: bank3 },
  { name: "Axis Bank", logo: bank4 },
  { name: "HSBC", logo: bank5 },
  { name: "Kotak Mahindra", logo: bank6 },
];

const walletOffers = [
  { name: "PayPal", logo: bank7 },
  { name: "Google Pay", logo: bank8 },
  { name: "Paytm", logo: bank9 },
  { name: "MobiKwik", logo: bank10 },
  { name: "PayZapp", logo: bank11 },
  { name: "Freecharge", logo: bank12 },
];

const OfferCard = ({ title, icon, offers }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col lg:flex-row items-center lg:items-start gap-4">
      {/* Left Side - Offer Type */}
      <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg w-full lg:w-1/3">
        {icon}
        <p className="mt-2 font-semibold text-lg">{title}</p>
      </div>

      {/* Right Side - Offers Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full lg:w-2/3">
        {offers.map((offer, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded-md shadow flex justify-center items-center">
            <img src={offer.logo} alt={offer.name} className="h-10" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Offer = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-xl font-bold mb-6">Looking For More Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <OfferCard title="Bank Offers" icon={<FaUniversity className="text-4xl text-blue-500" />} offers={bankOffers} />
        <OfferCard title="Wallet Offers" icon={<FaWallet className="text-4xl text-blue-500" />} offers={walletOffers} />
      </div>
    </div>
  );
};

export default Offer;
