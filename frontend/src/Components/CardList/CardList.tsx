import React, { SyntheticEvent } from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResults: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
  hasSearched?: boolean;
}

const CardList: React.FC<Props> = ({
  searchResults,
  onPortfolioCreate,
  hasSearched = false,
}: Props): JSX.Element => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {searchResults.length > 0 ? (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Search Results</h2>
            <div className="space-y-4">
              {searchResults.map((result) => {
                return (
                  <Card
                    id={result.symbol}
                    key={uuidv4()}
                    searchResult={result}
                    onPortfolioCreate={onPortfolioCreate}
                  />
                );
              })}
            </div>
          </>
        ) : (
          hasSearched ? (
            <div className="text-center py-12">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <p className="text-xl font-semibold text-gray-700">No results found</p>
              <p className="text-gray-500 mt-2">Try searching for a different company or ticker symbol</p>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
};

export default CardList;
