import React, { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({
  id,
  searchResult,
  onPortfolioCreate,
}: Props): JSX.Element => {
  return (
    <div
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 hover:border-lightBlue overflow-hidden"
      key={id}
      id={id}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between p-6 gap-4">
        {/* Company Info */}
        <Link
          to={`/company/${searchResult.symbol}/company-profile`}
          className="flex-1 min-w-0"
        >
          <div className="hover:opacity-80 transition-opacity">
            <h3 className="font-bold text-lg text-gray-900 truncate">
              {searchResult.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              <span className="font-semibold text-lightBlue">{searchResult.symbol}</span>
              {" • "}
              <span>{searchResult.exchangeShortName}</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {searchResult.stockExchange} • {searchResult.currency}
            </p>
          </div>
        </Link>

        {/* Action Button */}
        <div className="flex-shrink-0">
          <AddPortfolio
            onPortfolioCreate={onPortfolioCreate}
            symbol={searchResult.symbol}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
