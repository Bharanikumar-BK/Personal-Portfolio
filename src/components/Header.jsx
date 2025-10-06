import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import ProfileImage from "../assets/profile.jpg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/home", label: "Home", icon: <FaHome /> },
    { path: "/about", label: "About", icon: <FaUser /> },
    { path: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
    { path: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <header className="fixed md:fixed top-0 left-0 h-full w-full md:w-64 bg-[#0d1117] text-white flex flex-col justify-between shadow-xl z-50">
      {/* Profile Section */}
      <div className="flex flex-col items-center py-6">
        <img
          src={ProfileImage}
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-gray-700 object-cover"
        />
        <h2 className="text-xl font-semibold mt-3">Bharanikumar R</h2>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4">
          <a
            href="https://www.instagram.com/bk_x.raone/"
            className="hover:text-pink-400 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/Bharanikumar-BK"
            className="hover:text-blue-300 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/bharanikumarz/"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col flex-grow items-center mt-6 space-y-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `w-40 flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            {item.icon}
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden absolute top-4 right-4 p-2 bg-gray-800 rounded-md"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className="w-6 h-0.5 bg-white mb-1.5"></div>
        <div className="w-6 h-0.5 bg-white mb-1.5"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0d1117] border-t border-gray-700 flex flex-col items-center space-y-4 py-4 md:hidden animate-fade-in">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md w-40 text-center transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
