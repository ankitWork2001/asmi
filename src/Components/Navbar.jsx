import { useState } from "react";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import logo from '../Photos/Group.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#131A22] shadow-md">
      {/* Upper Navbar (Dark Background - Amazon Style) */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <Link to='/'>
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>

        <div className="relative hidden md:flex w-80">
          <input
            type="text"
            placeholder='Search "Samsung M51"'
            className="w-full px-4 py-2 text-gray-800 rounded-l-lg bg-white focus:outline-none"
          />
          <button className="px-4 bg-[#FF9900] hover:bg-[#e68a00] rounded-r-lg">
            <FaSearch className="text-white" />
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to='/login'>
            <FaUserCircle size={28} className="text-[#007185] cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl text-white">
            {menuOpen ? <IoClose /> : <TiThMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-white shadow-lg z-50 p-4 flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-96 opacity-0"
        }`}
      >
        <div className="relative w-full flex">
          <input
            type="text"
            placeholder='Search "Samsung M51"'
            className="w-full px-4 py-2 text-gray-800 rounded-l-lg bg-gray-200 focus:outline-none"
          />
          <button className="px-4 bg-[#FF9900] hover:bg-[#e68a00] rounded-r-lg">
            <FaSearch className="text-white" />
          </button>
        </div>

        <Link to='/login'>
          <FaUserCircle size={28} className="text-[#007185] cursor-pointer" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
