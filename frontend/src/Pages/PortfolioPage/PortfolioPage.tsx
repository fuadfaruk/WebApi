import React, { useEffect, useState, SyntheticEvent } from "react";
import { PortfolioGet } from "../../Models/Portfolio";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import {
  portfolioGetAPI,
  portfolioDeleteAPI,
} from "../../Services/PortfolioService";
import { toast } from "react-toastify";

const PortfolioPage = () => {
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>([]);

  useEffect(() => {
    getPortfolio();
  }, []);

  const getPortfolio = () => {
    portfolioGetAPI()
      .then((res) => {
        if (res?.data) setPortfolioValues(res.data);
      })
      .catch(() => {
        toast.warning("Unable to get portfolio!");
      });
  };

  const onPortfolioDelete = (e: SyntheticEvent) => {
    e.preventDefault();
    portfolioDeleteAPI(e.target[0].value)
      .then((res) => {
        if (res?.status == 200) {
          toast.success("Stock deleted from portfolio!");
          getPortfolio();
        }
      })
      .catch(() => {
        toast.warning("Unable to delete stock from portfolio!");
      });
  };

  return (
    <div className="min-h-screen bg-white">
      <ListPortfolio
        portfolioValues={portfolioValues!}
        onPortfolioDelete={onPortfolioDelete}
      />
    </div>
  );
};

export default PortfolioPage;
