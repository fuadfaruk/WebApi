import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaTable, FaMoneyBill } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";

type Props = {};

const Sidebar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname.includes(path);

  const navItems = [
    { path: "company-profile", label: "Company Profile", icon: FaHome },
    { path: "income-statement", label: "Income Statement", icon: FaTable },
    { path: "balance-sheet", label: "Balance Sheet", icon: FaTableCells },
    { path: "cashflow-statement", label: "Cashflow Statement", icon: FaMoneyBill },
    { path: "historical-dividend", label: "Historical Dividend", icon: SlGraph },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-24 left-4 z-50 p-3 rounded-2xl bg-lightBlue text-white shadow-lg hover:bg-darkBlue transition-colors"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-slate-950/30 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <nav
        className={`fixed md:fixed md:translate-x-0 transition-transform duration-300 ease-in-out top-16 left-0 h-[calc(100vh-64px)] w-full max-w-[18rem] bg-white shadow-xl z-50 overflow-y-auto border-r border-slate-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex flex-col gap-6 p-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Company Section</p>
            <h3 className="text-2xl font-semibold tracking-tight text-slate-950">Company Insights</h3>
            <p className="text-sm text-slate-600 leading-6">
              Navigate the company profile, financial statements, dividend history, and more.
            </p>
          </div>

          <div className="space-y-2 border-t border-slate-200 pt-4">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200 ${
                    active
                      ? "bg-lightBlue/10 text-slate-950 shadow-sm"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lightBlue/10 text-lightBlue text-lg">
                    <IconComponent />
                  </span>
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
