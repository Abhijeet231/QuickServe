import React from "react";
import { Link } from "react-router-dom";
import { Wrench, Mail, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-white to-gray-50 mt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2.5 text-xl font-semibold tracking-tight group"
            >
              <div className="bg-primary text-primary-foreground p-2 rounded-xl shadow-md group-hover:scale-105 transition">
                <Wrench size={18} />
              </div>
              <span className="text-gray-900">
                Quick<span className="text-primary">Serve</span>
              </span>
            </Link>

            <p className="text-gray-500 text-sm mt-4 leading-relaxed">
              Your trusted platform for finding reliable home services quickly and easily.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 tracking-wide">
              Explore
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition flex items-center gap-1"
                >
                  Browse Services 
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="hover:text-primary transition flex items-center gap-1"
                >
                  Popular Categories 
                </Link>
              </li>

              <li>
                <Link
                  to="/become-provider"
                  className="hover:text-primary transition flex items-center gap-1"
                >
                  Become a Provider 
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 tracking-wide">
              Company
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition flex items-center gap-1"
                >
                  About Us 
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition flex items-center gap-1"
                >
                  Contact 
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="hover:text-primary transition flex items-center gap-1"
                >
                  Privacy Policy 
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 tracking-wide">
              Support
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} /> support@servicele.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +91 90000 00000
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} /> Mon – Sat
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-medium text-gray-700">ServiceLE</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;