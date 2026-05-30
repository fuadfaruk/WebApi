import React, { ChangeEvent, useState, SyntheticEvent, FormEvent } from "react";

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  handleSearchChange,
}: Props): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Search Companies
          </h2>
          <p className="text-gray-300 text-lg">
            Find stocks and build your investment portfolio
          </p>
        </div>

        {/* Search Form */}
        <form
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          onSubmit={onSearchSubmit}
        >
          <div className="flex-1 relative">
            <div
              className={`relative transition-all ${
                isFocused
                  ? "ring-2 ring-lightGreen shadow-lg shadow-lightGreen/50"
                  : "ring-1 ring-white/20"
              } rounded-lg`}
            >
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
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
              <input
                className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white/10 text-white placeholder-gray-400 rounded-lg focus:outline-none transition-colors backdrop-blur-sm"
                id="search-input"
                placeholder="Enter company name or ticker symbol..."
                value={search}
                onChange={handleSearchChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                aria-label="Search companies"
              />
            </div>
          </div>

          <button
            type="submit"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-lightGreen to-emerald-500 text-white rounded-lg hover:shadow-lg hover:shadow-lightGreen/50 transition-all font-bold text-lg disabled:opacity-50 flex items-center justify-center whitespace-nowrap"
          >
            <svg
              className="w-5 h-5 mr-2"
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
            Search
          </button>
        </form>

        {/* Search Tips */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <p className="text-sm text-gray-300">
              💡 <span className="font-semibold text-white">Tip:</span> Search by ticker symbol like "AAPL"
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <p className="text-sm text-gray-300">
              💡 <span className="font-semibold text-white">Tip:</span> Search by company name like "Apple"
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
            <p className="text-sm text-gray-300">
              💡 <span className="font-semibold text-white">Tip:</span> Add results to your portfolio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
