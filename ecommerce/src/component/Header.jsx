import { FaRegUserCircle } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { IoMdSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FaBorderNone } from "react-icons/fa6";
import { useContext, useState, useEffect } from "react";
import { Mycontext } from "../context/Mycontext";

function Header() {
  const { name, addnameinmenu } = useContext(Mycontext);

  const [hovered, updatehovered] = useState(false);
  const [userhovered, updateuserhovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const userdetail = () => {
    if (name === "Login") {
      window.open("/log", "_self");
    } else {
      window.open("/user", "_self");
    }
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    if (name === "Login") {
      updateuserhovered(false);
    }
  }, [name]);

  return (
    <div className="relative bg-blue-100 w-full h-16 md:h-20 px-4 md:px-8 shadow-md">
      <div className="flex flex-row items-center justify-between gap-2 h-full">
        {/* Logo */}
        <span className="text-2xl md:text-4xl font-bold">Cucie</span>

        {/* Search Bar */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <input
            type="text"
            className="rounded-md h-10 px-4 w-full md:w-72 border-2 border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500 transition"
            placeholder="Search Here..."
          />
          <IoMdSearch className="text-2xl text-gray-500 cursor-pointer hover:text-indigo-500 transition" />
        </div>

        {/* Icons on the right */}
        <div className="flex items-center gap-3">
          {/* User Info */}
          <div
            onMouseEnter={() => updateuserhovered(true)}
            onMouseLeave={() => updateuserhovered(false)}
            className="hidden md:flex md:mr-6 items-center gap-2 cursor-pointer bg-green-500 p-2 rounded-xl"
          >
            <span className="text-lg font-semibold">{name === "Login" ? "Guest" : "Robin"}</span>
            <FaRegUserCircle className="text-3xl" />
          </div>

          {/* Cart Icon */}
          <FiShoppingCart className="text-2xl md:mr-6 md:text-3xl cursor-pointer hover:text-indigo-500 transition" />

          {/* Menu Icon */}
          <HiDotsVertical
            className="text-2xl md:text-3xl cursor-pointer hover:text-indigo-500 transition"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Dropdown Menu for small screens */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-md py-2 w-40 md:hidden">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">User Profile</li>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={() => addnameinmenu("Login")}>
              Log Out
            </li>
          </ul>
        </div>
      )}

      {/* Hover Menu for User */}
      {userhovered && (
        <div
          className="hidden md:block absolute top-20 right-8 bg-white shadow-lg rounded-md py-2 w-48"
          onMouseEnter={() => updateuserhovered(true)}
          onMouseLeave={() => updateuserhovered(false)}
        >
          <ul>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">User Profile</li>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer" onClick={() => addnameinmenu("Login")}>
              Log Out
            </li>
          </ul>
        </div>
      )}

      {/* Hover Menu for Other Options */}
      {hovered && (
        <div
          className="absolute top-16 right-4 bg-white shadow-lg rounded-md py-2 w-40 hidden md:block"
          onMouseEnter={() => updatehovered(true)}
          onMouseLeave={() => updatehovered(false)}
        >
          <ul>
            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">Contact Us</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
