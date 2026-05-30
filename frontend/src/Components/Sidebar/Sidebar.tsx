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
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-20 left-4 z-40 p-2 rounded-lg bg-lightBlue text-white hover:bg-darkBlue transition-colors"
        aria-expanded={isOpen}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30 top-16"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <nav
        className={`fixed md:relative md:translate-x-0 transition-transform duration-300 ease-in-out top-16 left-0 h-[calc(100vh-64px)] w-64 bg-white shadow-xl z-40 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-2">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Navigation</h3>

          {navItems.map((item) => {
            const IconComponent = item.icon;
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                  active
                    ? "bg-lightBlue text-white font-semibold"
                    : "text-gray-700 hover:bg-gray-100 font-medium"
                }`}
              >
                <IconComponent className="text-lg" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
