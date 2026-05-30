import React from "react";
import CardPortfolio from "../CardPortfolio/CardPortfolio";
import { PortfolioGet } from "../../../Models/Portfolio";

interface Props {
  portfolioValues: PortfolioGet[];
  onPortfolioDelete: (symbol: string) => void;
}

const ListPortfolio = ({ portfolioValues, onPortfolioDelete }: Props) => {
  return (
    <section id="portfolio" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            My Portfolio
          </h2>
          <p className="text-gray-600 mt-2">
            {portfolioValues.length > 0
              ? `You have ${portfolioValues.length} stock${
                  portfolioValues.length !== 1 ? "s" : ""
                } in your portfolio`
              : "Start building your investment portfolio"}
          </p>
        </div>

        {portfolioValues.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolioValues.map((portfolioValue) => {
              return (
                <CardPortfolio
                  key={portfolioValue.id}
                  portfolioValue={portfolioValue}
                  onPortfolioDelete={onPortfolioDelete}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-300">
            <svg
              className="mx-auto h-12 w-12 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <p className="text-lg font-semibold text-gray-700">Your portfolio is empty</p>
            <p className="text-gray-500 mt-2">
              Search for companies and add them to get started
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ListPortfolio;
