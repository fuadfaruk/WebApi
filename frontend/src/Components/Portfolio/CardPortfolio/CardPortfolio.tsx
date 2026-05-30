import React from "react";
import { Link } from "react-router-dom";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";
import { PortfolioGet } from "../../../Models/Portfolio";

interface Props {
  portfolioValue: PortfolioGet;
  onPortfolioDelete: (symbol: string) => void;
}

const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
  return (
    <Link
      to={`/company/${portfolioValue.symbol}/company-profile`}
      className="block"
    >
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-200 hover:border-lightBlue transition-all p-6 text-center h-full flex flex-col items-center justify-center gap-4 hover:bg-opacity-90">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-lightBlue to-lightGreen rounded-lg">
          <span className="text-white font-bold text-lg">
            {portfolioValue.symbol.charAt(0)}
          </span>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            {portfolioValue.symbol}
          </h3>
          <p className="text-sm text-gray-600 mt-1">Stock in Portfolio</p>
        </div>

        <div className="w-full pt-4 border-t border-gray-100">
          <DeletePortfolio
            portfolioValue={portfolioValue.symbol}
            onPortfolioDelete={onPortfolioDelete}
          />
        </div>
      </div>
    </Link>
  );
};

export default CardPortfolio;
