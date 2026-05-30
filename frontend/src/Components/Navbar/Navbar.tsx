import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import { useAuth } from "../../Context/useAuth";

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0" onClick={closeMenu}>
            <img src={logo} alt="Logo" className="h-8 w-8" />
            <span className="hidden sm:inline font-bold text-lg text-gray-900">FinanceApp</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isLoggedIn() && (
              <>
                <Link
                  to="/search"
                  className="text-gray-700 hover:text-darkBlue font-medium transition-colors"
                >
                  Search
                </Link>
                <Link
                  to="/portfolio"
                  className="text-gray-700 hover:text-darkBlue font-medium transition-colors"
                >
                  Portfolio
                </Link>
              </>
            )}
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn() ? (
              <>
                <span className="text-gray-700 font-medium">
                  {user?.userName}
                </span>
                <button
                  onClick={logout}
                  className="px-6 py-2 bg-lightGreen text-white rounded-lg hover:bg-opacity-90 transition-all font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-gray-700 hover:text-darkBlue font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2 bg-lightGreen text-white rounded-lg hover:bg-opacity-90 transition-all font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-darkBlue focus:outline-none"
            aria-expanded="false"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {isLoggedIn() && (
              <>
                <Link
                  to="/search"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium"
                  onClick={closeMenu}
                >
                  Search
                </Link>
                <Link
                  to="/portfolio"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium"
                  onClick={closeMenu}
                >
                  Portfolio
                </Link>
              </>
            )}

            <div className="border-t border-gray-200 pt-2 mt-2">
              {isLoggedIn() ? (
                <>
                  <div className="px-3 py-2 text-gray-700 font-medium">
                    {user?.userName}
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      closeMenu();
                    }}
                    className="w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 font-medium"
                    onClick={closeMenu}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-3 py-2 mt-1 bg-lightGreen text-white rounded-md hover:bg-opacity-90 font-medium"
                    onClick={closeMenu}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
