import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { CompanyKeyMetrics } from "../../company";
import { getKeyMetrics } from "../../api";
import RatioList from "../RatioList/RatioList";
import Spinner from "../Spinners/Spinner";
import {
  formatLargeNonMonetaryNumber,
  formatRatio,
} from "../../Helpers/NumberFormatting";
import StockComment from "../StockComment/StockComment";

type Props = {};

const tableConfig = 
[
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNonMonetaryNumber(company.marketCap),
    subTitle: "Total value of all a company's shares of stock",
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.currentRatioTTM),
    subTitle:
      "Measures the companies ability to pay short term debt obligations",
  },
  {
    label: "Return On Assets",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.returnOnTangibleAssetsTTM),
    subTitle:
      "Return on assets is the measure of how effective a company is using its assets",
  },
  {
    label: "Free Cashflow Per Share",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.freeCashFlowToEquityTTM),
    subTitle:
      "Return on assets is the measure of how effective a company is using its assets",
  },
  {
    label: "Earnings Yield TTM",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.earningsYieldTTM),
    subTitle: "Shows how much a company pays each year relative to stock price",
  },
  {
    label: "Capex To Revenue TTM",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.capexToRevenueTTM),
    subTitle:
      "Capex is used by a company to aquire, upgrade, and maintain physical assets",
  },
  {
    label: "Graham Number",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.grahamNumberTTM),
    subTitle:
      "This is the upperbouind of the price range that a defensive investor should pay for a stock",
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) => formatRatio(company.currentRatioTTM),
    subTitle:
      "This is the upperbouind of the price range that a defensive investor should pay for a stock",
  },
];

const CompanyProfile = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();
  useEffect(() => {
    const getCompanyKeyRatios = async () => {
      const value = await getKeyMetrics(ticker);
      setCompanyData(value?.data[0]);
    };
    getCompanyKeyRatios();
  }, [ticker]);
  return (
    <>
      {companyData ? (
        <>
          <RatioList config={tableConfig} data={companyData} />
          <StockComment stockSymbol={ticker} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyProfile;
