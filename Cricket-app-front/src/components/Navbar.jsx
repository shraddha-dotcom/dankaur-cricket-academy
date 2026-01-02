import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="sticky top-0 z-[1000] backdrop-blur-md"
      style={{ backgroundColor: "var(--primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-[72px] flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Dankaur Cricket Academy"
            className="h-12 w-12 object-contain"
          />
          <span className="text-white text-xl md:text-2xl font-semibold tracking-wide">
            Dankaur Cricket Academy
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Contact Us", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-sm font-medium transition ${
                isActive(item.path)
                  ? "text-white after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-secondary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* CTA */}
          <Link
            to="/registration"
            className="ml-4 bg-secondary text-black font-semibold px-6 py-2 rounded-full shadow hover:scale-105 transition"
          >
            Registration
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
        style={{ backgroundColor: "var(--primary)" }}
      >
        <div className="flex flex-col gap-4 px-6 py-6">
          {["/", "/about", "/contact"].map((path, i) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-white ${
                isActive(path) ? "font-semibold" : "opacity-80"
              }`}
            >
              {["Home", "About Us", "Contact Us"][i]}
            </Link>
          ))}

          <Link
            to="/registration"
            onClick={() => setIsMenuOpen(false)}
            className="bg-secondary text-black text-center py-2 rounded-full font-semibold"
          >
            Registration
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
