import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-auto">
      {/* Accent Top Bar */}
      <div className="h-1 w-full bg-blue-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img
                src="/logo1.PNG"
                alt="Dankaur Cricket Academy"
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
              />
              <h3 className="text-white text-xl sm:text-2xl font-semibold leading-tight">
                Dankaur Cricket Academy
              </h3>
            </div>

            <p className="text-sm leading-relaxed">
              हर शॉट में आत्मविश्वास, हर खिलाड़ी में भविष्य
            </p>
            <p className="text-xs italic text-gray-400">
              (Confidence in every shot, future in every player)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Contact Us", path: "/contact" },
                { name: "Registration", path: "/registration" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Contact Information
            </h4>

            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                <span className="font-medium text-white">📍 Address:</span><br />
                Uday Bhagat Ji Cricket Ground<br />
                Near Eastern Delhi Public School<br />
                Dhanouri Road, Dankaur<br />
                G.B. Nagar, UP – 203201
              </p>

              <p>
                <span className="font-medium text-white">📞 Phone:</span><br />
                <a href="tel:7505228484" className="hover:text-white">7505228484</a>,{" "}
                <a href="tel:8766318457" className="hover:text-white">8766318457</a>,{" "}
                <a href="tel:9410287206" className="hover:text-white">9410287206</a>
              </p>

              <p>
                <span className="font-medium text-white">✉ Email:</span><br />
                <a
                  href="mailto:dankaurcricketacademy@gmail.com"
                  className="hover:text-white whitespace-nowrap"
                >
                  dankaurcricketacademy@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Follow Us
            </h4>

            <div className="flex gap-4">
              <SocialIcon
                href="#"
                label="Facebook"
                bg="hover:bg-blue-600"
                icon={<FaFacebookF />}
              />
              <SocialIcon
                href="#"
                label="Instagram"
                bg="hover:bg-pink-600"
                icon={<FaInstagram />}
              />
              <SocialIcon
                href="#"
                label="YouTube"
                bg="hover:bg-red-600"
                icon={<FaYoutube />}
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Dankaur Cricket Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, label, icon, bg }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-11 h-11 flex items-center justify-center rounded-lg bg-gray-700 text-white transition-all duration-200 hover:scale-110 ${bg}`}
  >
    <span className="text-lg">{icon}</span>
  </a>
);

export default Footer;
