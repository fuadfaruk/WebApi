import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-md">
        {/* 404 Error Code */}
        <div className="mb-4">
          <h1 className="text-9xl font-bold text-lightBlue opacity-75">404</h1>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-lightBlue text-white rounded-lg hover:bg-darkBlue transition-all font-medium"
          >
            Go Home
          </Link>
          <Link
            to="/search"
            className="px-8 py-3 bg-lightGreen text-white rounded-lg hover:opacity-90 transition-all font-medium"
          >
            Search Stocks
          </Link>
        </div>

        {/* Illustration (simple SVG) */}
        <div className="mt-12 opacity-50">
          <svg
            className="w-32 h-32 mx-auto text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
