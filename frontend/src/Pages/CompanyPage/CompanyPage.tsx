import React, { useEffect, useState } from "react";
import { CompanyProfile } from "../../company";
import { Link, useParams } from "react-router-dom";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";
import Spinner from "../../Components/Spinners/Spinner";
import CompFinder from "../../Components/CompFinder/CompFinder";
import {
  formatLargeMonetaryNumber,
  formatLargeNonMonetaryNumber,
  formatRatio,
} from "../../Helpers/NumberFormatting";

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();

  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfileInit();
  }, []);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
              <Tile 
                title="Company Name" 
                subTitle={
                  company.companyName || "N/A"
                } 
              />
              <Tile 
                title="Price" 
                subTitle={
                  "$" + company.price.toString()
                } 
              />
              <Tile
                title="Market Cap"
                subTitle={
                  company.marketCap
                    ? formatLargeMonetaryNumber(company.marketCap)
                    : "N/A"
                }
              />
              <Tile
                title="Change %"
                subTitle={
                  company.changePercentage !== undefined
                    ? formatRatio(company.changePercentage) + "%"
                    : "N/A"
                }
              />
              <Tile
                title="Volume"
                subTitle={
                  company.volume
                    ? formatLargeNonMonetaryNumber(company.volume)
                    : "N/A"
                }
              />
              <Tile 
                title="Sector" 
                subTitle={
                  company.sector || "N/A"
                } 
              />
            <CompFinder ticker={company.symbol} />
            <p className="bg-white shadow rounded text-medium font-medium text-gray-900 p-3 mt-1 m-4">
              {company.description || ""}
            </p>
          </CompanyDashboard>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyPage;
