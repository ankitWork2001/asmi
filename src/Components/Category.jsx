import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NAV_ITEMS = [
  { name: "Categories", submenu: true },
  { name: "Top Stores", submenu: true },
  { name: "Best Offers", submenu: true },
  { name: "Collections", submenu: true },
  { name: "Share & Earn", submenu: true, badge: "NEW" },
];

const DROPDOWN_DATA = {
  Categories: {
    Mobile: [
      { name: "Mobile" },
      { name: "Tablet" },
      { name: "Accessories" },
    ],
    Travel: [
      { name: "Bus" },
      { name: "Flight" },
      { name: "Train" },
    ],
  },
  "Top Stores": {
    MegaSale: [
      { name: "Amazon" },
      { name: "Myntra" },
      { name: "Flipkart" },
    ],
  },
  "Best Offers": {
    MegaSale: [
      { name: "AJIO" },
      { name: "Myntra" },
      { name: "Titan" },
    ],
  },
  Collections: {
    MegaSale: [
      { name: "Amazon Great Republic Day Sale" },
    ],
    Festival: [
      { name: "Valentine's Day Offers" },
    ],
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 mt-16 z-[100]">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Navigation Menu on the Left */}
        <ul className="hidden md:flex space-x-6 relative flex-1">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.name}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span className="hover:text-gray-400 cursor-pointer flex items-center bg-gray-800 px-4 py-2 rounded-md shadow-md transition-transform duration-200 ease-in-out hover:scale-105">
                {item.name}
                {item.badge && <span className="text-yellow-400 text-xs ml-1">{item.badge}</span>}
              </span>

              {/* Dropdown */}
              {item.submenu && hoveredItem === item.name && (
                <div className="absolute left-0 top-full bg-white text-black p-6 shadow-2xl w-96 flex space-x-8 rounded-lg border border-gray-200 animate-fade-in">
                  {DROPDOWN_DATA[item.name] &&
                    Object.entries(DROPDOWN_DATA[item.name]).map(([category, items]) => (
                      <div key={category} className="space-y-3 w-1/2">
                        <h4 className="font-bold text-gray-700 border-b pb-1 mb-2">{category}</h4>
                        {items.map((offer) => (
                          <div key={offer.name} className="flex items-center space-x-2 hover:text-red-500 cursor-pointer px-2 py-1 transition-all duration-200 hover:bg-gray-100 rounded-md">
                            <span>{offer.name}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Add to Chrome Button on the Right */}
        <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 px-4 py-2 rounded-full shadow-md text-gray-900 font-medium text-sm hidden md:block hover:opacity-90 transition-all duration-200 ml-auto">
          Add to Chrome - It’s Free
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden ml-auto" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-4 rounded-lg">
          {NAV_ITEMS.map((item) => (
            <p key={item.name} className="hover:text-gray-400 cursor-pointer">
              {item.name}
            </p>
          ))}
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 px-4 py-2 w-full rounded-full shadow-md text-gray-900 font-medium text-sm hover:opacity-90 transition-all duration-200">
            Add to Chrome - It’s Free
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
