import React, { useEffect, useState } from "react";
import { CompanyProfile } from "../../company";
import { useParams } from "react-router-dom";
import { getCompanyProfile } from "../../api";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";
import Spinner from "../../Components/Spinners/Spinner";
import CompFinder from "../../Components/CompFinder/CompFinder";
import { FaChevronDown } from "react-icons/fa";
import {
  formatLargeMonetaryNumber,
  formatLargeNonMonetaryNumber,
  formatRatio,
} from "../../Helpers/NumberFormatting";

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();

  const [company, setCompany] = useState<CompanyProfile>();
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfileInit();
  }, [ticker]);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard
            ticker={ticker!}
            topSection={
              <>
                <div className="bg-white rounded-[1.75rem] border border-slate-200 shadow-xl p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-950">About {company.symbol}</h3>
                      <p className="mt-2 text-sm text-slate-500">
                        {company.exchange || "Market data"}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`mt-5 overflow-hidden text-slate-600 leading-8 transition-all duration-300 ease-in-out ${
                      isAboutExpanded ? "max-h-[1000px]" : "max-h-[6rem]"
                    }`}
                  >
                    {company.description || "No company description available."}
                  </div>
                  <div className="mt-1 flex justify-center">
                    <button
                      onClick={() => setIsAboutExpanded((prev) => !prev)}
                      aria-label={isAboutExpanded ? "Collapse about section" : "Expand about section"}
                    >
                      <FaChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${isAboutExpanded ? "rotate-180" : "rotate-0"}`}
                      />
                    </button>
                  </div>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200 bg-white shadow-xl p-6 sm:p-8">
                  <CompFinder ticker={company.symbol} />
                </div>
              </>
            }
          >
            <Tile
              title="Company Name"
              subTitle={company.companyName || "N/A"}
            />
            <Tile
              title="Price"
              subTitle={"$" + company.price.toString()}
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
              subTitle={company.sector || "N/A"}
            />
          </CompanyDashboard>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyPage;
