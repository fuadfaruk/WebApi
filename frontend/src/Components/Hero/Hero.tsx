import React from "react";
import { Link } from "react-router-dom";
import hero from "./hero.png";
import "./Hero.css";

interface Props {}

const Hero = (props: Props) => {
  return (
    <>
      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-lightBlue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-lightGreen rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-4000"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="flex flex-col space-y-6 lg:space-y-8 text-center lg:text-left">
              {/* Subtitle */}
              <div className="inline-block lg:inline-block">
                <span className="px-4 py-2 bg-lightBlue/20 text-lightBlue rounded-full text-sm font-semibold">
                  📊 Financial Intelligence Platform
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Financial Data{" "}
                <span className="bg-gradient-to-r from-lightBlue to-lightGreen bg-clip-text text-transparent">
                  Without Bias
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Access reliable financial statements and metrics. Make informed
                investment decisions with real data, not speculation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-start">
                <Link
                  to="/search"
                  className="px-8 py-4 bg-gradient-to-r from-lightGreen to-emerald-500 text-white rounded-lg hover:shadow-lg hover:shadow-lightGreen/50 transition-all font-bold text-lg transform hover:-translate-y-1"
                >
                  Start Searching
                </Link>
                <Link
                  to="/register"
                  className="px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all font-bold text-lg backdrop-blur-sm"
                >
                  Create Account
                </Link>
              </div>

              {/* Features */}
              <div className="pt-4 grid grid-cols-2 gap-4 text-sm text-gray-300">
                <div className="flex items-start space-x-2">
                  <span className="text-lightGreen text-lg">✓</span>
                  <span>Real Financial Data</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-lightGreen text-lg">✓</span>
                  <span>Save Your Portfolio</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-lightGreen text-lg">✓</span>
                  <span>Compare Companies</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-lightGreen text-lg">✓</span>
                  <span>Community Insights</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-lightBlue to-lightGreen rounded-2xl blur-2xl opacity-30"></div>
                <img
                  src={hero}
                  alt="Financial Dashboard"
                  className="relative w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-lightGreen"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section Below Hero */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to make better investment decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Comprehensive Data
              </h3>
              <p className="text-gray-700">
                Access income statements, balance sheets, cash flows, and key metrics
                from real financial sources.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-green-50 to-green-100/50 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Unbiased Insights
              </h3>
              <p className="text-gray-700">
                Pure financial data without speculation, rumors, or sensationalism.
                Just the facts.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100/50 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Easy Comparison
              </h3>
              <p className="text-gray-700">
                Compare multiple companies side-by-side to identify investment
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
