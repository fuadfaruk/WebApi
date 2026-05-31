import React from "react";
import { Outlet } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  ticker: string;
  topSection?: React.ReactNode;
}

const CompanyDashboard = ({ children, ticker, topSection }: Props) => {
  return (
    <div className="relative w-full md:ml-72">
      <div className="relative bg-slate-100 min-h-[calc(100vh-64px)]">
        <div className="pt-10 pb-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
          <div className="space-y-8">
            <div className="bg-white/95 rounded-[2rem] border border-slate-200 shadow-xl p-6 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-950 uppercase">
                    {ticker}
                  </h1>
                  <p className="mt-2 text-sm text-slate-500">Company Financial Information</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-lightBlue/10 px-3 py-1 text-sm font-medium text-lightBlue">
                    Profile Overview
                  </span>
                  <span className="inline-flex items-center rounded-full bg-slate-200/80 px-3 py-1 text-sm font-medium text-slate-700">
                    Financial Statements
                  </span>
                </div>
              </div>
            </div>

            {topSection && <div className="space-y-6">{topSection}</div>}

            <div className="space-y-8">
              <section className="bg-white rounded-[2rem] border border-slate-200 shadow-xl p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6 gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-950">Key Metrics</h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Core market and performance metrics for the selected company.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {children}
                </div>
              </section>

              <section className="bg-white rounded-[2rem] border border-slate-200 shadow-xl p-6 sm:p-8">
                <Outlet context={ticker} />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
