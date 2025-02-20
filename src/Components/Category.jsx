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
      { name: "Mobile", },
      { name: "Tablet", },
      { name: "Accessories", },
    ],
    Travel: [
      { name: "Bus", },
      { name: "Flight", },
      { name: "Train", },
    ],
  },
  "Top Stores": {
    MegaSale: [
      { name: "Amazone", },
      { name: "Myntra", },
      { name: "Flipkart", },
    ],

    
  },
  "Best Offers": {
    MegaSale: [
      { name:"AJIO", },
      { name: "Myntra", },
      { name: "Titan", },
    ],
  },
  Collections: {
    MegaSale: [
      { name: "Amazon Great Republic Day Sale", },
    ],
    Festival: [
      { name: "Valentine's Day Offers", },
    ],
  },
  
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 mt-16 z-[100]">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Navigation Menu */}
        <ul className="hidden md:flex space-x-6 relative">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.name}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.name)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span className="hover:text-gray-400 cursor-pointer flex items-center">
                {item.name}
                {item.badge && <span className="text-yellow-400 text-xs ml-1">{item.badge}</span>}
              </span>

              {/* Dropdown */}
              {item.submenu && hoveredItem === item.name && (
                <div className="absolute left-0 top-full bg-white text-black p-4 shadow-lg w-80 flex space-x-8">
                  {DROPDOWN_DATA[item.name] &&
                    Object.entries(DROPDOWN_DATA[item.name]).map(([category, items]) => (
                      <div key={category} className="space-y-2">
                        <h4 className="font-bold">{category}</h4>
                        {items.map((offer) => (
                          <div key={offer.name} className="flex items-center space-x-2 hover:text-red-500 cursor-pointer">
                            {/* <img src={offer.img} alt={offer.name} className="w-6 h-6" /> */}
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

        {/* Right Side */}
        <button className="bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 hidden md:block">
          Add to Chrome - It’s Free
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-4">
          {NAV_ITEMS.map((item) => (
            <p key={item.name} className="hover:text-gray-400 cursor-pointer">
              {item.name}
            </p>
          ))}
          <button className="bg-gray-700 px-4 py-2 w-full rounded-md hover:bg-gray-600">
            Add to Chrome - It’s Free
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;






