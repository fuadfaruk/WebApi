import React from "react";
import { Outlet } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  ticker: string;
}

const CompanyDashboard = ({ children, ticker }: Props) => {
  return (
    <div className="relative w-full md:ml-64">
      <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 min-h-[calc(100vh-64px)]">
        <div className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
          <div className="space-y-8">
            {/* Header Card with Ticker */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 uppercase tracking-wide">
                {ticker}
              </h1>
              <p className="text-gray-600 text-sm mt-1">Company Financial Information</p>
            </div>

            {/* Content Grid */}
            <div className="space-y-8">
              {/* Key Metrics */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Metrics</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {children}
                </div>
              </div>

              {/* Detailed Information */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
                {<Outlet context={ticker} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
