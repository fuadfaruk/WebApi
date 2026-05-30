import React from "react";

interface Props {
  onPortfolioDelete: (symbol: string) => void;
  portfolioValue: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <div className="w-full">
      <button
        className="w-full py-2 px-4 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all font-semibold text-sm border border-red-200 hover:border-red-300 flex items-center justify-center gap-2"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (window.confirm(`Are you sure you want to remove ${portfolioValue} from your portfolio?`)) {
            onPortfolioDelete(portfolioValue);
          }
        }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
        Remove
      </button>
    </div>
  );
};

export default DeletePortfolio;
