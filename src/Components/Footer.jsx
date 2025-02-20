import { FaFacebookF, FaInstagram, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import logo from "../Photos/Group.png";
import qr from "../Photos/Group_1351.png";
import download from "../Photos/Group_1429.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Section */}
        <div className="mb-6 md:mb-0">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Coupon Dunia" className="w-10" />
            <h2 className="text-xl font-bold">COUPON DUNIA</h2>
          </div>
          <p className="mt-2 text-sm text-gray-400">
            India’s Go-To for Coupons, Offers & Cashback
          </p>
          {/* Social Icons */}
          <div className="flex space-x-3 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTelegramPlane className="text-xl" />
            </a>
          </div>
        </div>

        {/* Middle Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-bold text-white border-l-4 border-red-500 mb-3 pl-2">Help & Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#">FAQs</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Missing Cashback Claims</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white border-l-4 border-red-500 mb-3 pl-2">CouponDunia</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Media</a></li>
              <li><a href="#">List Your Business</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white border-l-4 border-red-500 mb-3 pl-2">Earning Programs & Benefits</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#">Shopping Assistant</a></li>
              <li><a href="#">Share & Earn</a></li>
              <li><a href="#">Refer & Earn</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section - QR Code & Download */}
        <div className="text-right">
          <h3 className="font-bold text-white mb-3">Download App</h3>
          <img src={qr} alt="QR Code" className="w-20 mx-auto md:mx-0" />
          <a href="#">
            <img src={download} alt="Get it on Google Play" className="w-32 mt-3 mx-auto md:mx-0" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
