import { SyntheticEvent } from "react";

interface Props {
  onPortfolioCreate: (e: SyntheticEvent) => void;
  symbol: string;
}

const AddPortfolio = ({ onPortfolioCreate, symbol }: Props) => {
  return (
    <form onSubmit={onPortfolioCreate} className="w-full">
      <input readOnly={true} hidden={true} value={symbol} />
      <button
        type="submit"
        className="w-full px-6 py-2 bg-gradient-to-r from-lightGreen to-emerald-500 text-white rounded-lg hover:shadow-md transition-all font-semibold text-sm flex items-center justify-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Add to Portfolio
      </button>
    </form>
  );
};

export default AddPortfolio;
