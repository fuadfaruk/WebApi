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

const tableConfig = [
  {
    label: "Company Name",
    render: (company: CompanyKeyMetrics) => company.companyName,
    subTitle: "The official name of the company",
  },
  {
    label: "Current Price",
    render: (company: CompanyKeyMetrics) => formatRatio(company.price),
    subTitle: "Current stock price",
  },
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNonMonetaryNumber(company.marketCap),
    subTitle: "Total value of all a company's shares of stock",
  },
  {
    label: "Beta",
    render: (company: CompanyKeyMetrics) => formatRatio(company.beta),
    subTitle:
      "Measures the stock's volatility relative to the overall market",
  },
  {
    label: "Last Dividend",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.lastDividend),
    subTitle: "Most recent dividend payment per share",
  },
  {
    label: "52 Week Range",
    render: (company: CompanyKeyMetrics) => company.range,
    subTitle: "The highest and lowest price over the past 52 weeks",
  },
  {
    label: "Price Change",
    render: (company: CompanyKeyMetrics) => formatRatio(company.change),
    subTitle: "Change in stock price",
  },
  {
    label: "Change Percentage",
    render: (company: CompanyKeyMetrics) =>
      formatRatio(company.changePercentage),
    subTitle: "Percentage change in stock price",
  },
  {
    label: "Volume",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNonMonetaryNumber(company.volume),
    subTitle: "Number of shares traded today",
  },
  {
    label: "Average Volume",
    render: (company: CompanyKeyMetrics) =>
      formatLargeNonMonetaryNumber(company.averageVolume),
    subTitle: "Average number of shares traded per day",
  },
  {
    label: "Sector",
    render: (company: CompanyKeyMetrics) => company.sector,
    subTitle: "The industry sector the company operates in",
  },
  {
    label: "Industry",
    render: (company: CompanyKeyMetrics) => company.industry,
    subTitle: "The specific industry classification",
  },
  {
    label: "CEO",
    render: (company: CompanyKeyMetrics) => company.ceo,
    subTitle: "Chief Executive Officer of the company",
  },
  {
    label: "Website",
    render: (company: CompanyKeyMetrics) => company.website,
    subTitle: "Official company website",
  },
  {
    label: "Country",
    render: (company: CompanyKeyMetrics) => company.country,
    subTitle: "Country where the company is headquartered",
  },
  {
    label: "State",
    render: (company: CompanyKeyMetrics) => company.state,
    subTitle: "State/Province where the company is headquartered",
  },
  {
    label: "Address",
    render: (company: CompanyKeyMetrics) => company.address,
    subTitle: "Company headquarters address",
  },
  {
    label: "City",
    render: (company: CompanyKeyMetrics) => company.city,
    subTitle: "City where the company is headquartered",
  },
  {
    label: "Zip Code",
    render: (company: CompanyKeyMetrics) => company.zip,
    subTitle: "Postal code of company headquarters",
  },
  {
    label: "Phone",
    render: (company: CompanyKeyMetrics) => company.phone,
    subTitle: "Company contact phone number",
  },
  {
    label: "Employees",
    render: (company: CompanyKeyMetrics) => company.fullTimeEmployees,
    subTitle: "Number of full-time employees",
  },
  {
    label: "Exchange",
    render: (company: CompanyKeyMetrics) => company.exchangeFullName,
    subTitle: "Stock exchange where the company is listed",
  },
  {
    label: "IPO Date",
    render: (company: CompanyKeyMetrics) => company.ipoDate,
    subTitle: "Initial public offering date",
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
  }, []);
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
