import React, { useEffect, useState } from "react";
import CompFinderItem from "./CompFinderItem/CompFinderItem";
import { CompanyCompData } from "../../company";
import { getCompData } from "../../api";
import Spinner from "../Spinners/Spinner";
type Props = {
  ticker: string;
};

const CompFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyCompData>();
  useEffect(() => {
    const getComps = async () => {
      const value = await getCompData(ticker);
      setCompanyData(value?.data[0]);
    };
    getComps();
  }, [ticker]);
  return (
    <div className="inline-flex rounded-md shadow-sm m-4" role="group">
      {companyData ? (
        (companyData.peersList || []).length > 0 ? (
          (companyData.peersList || []).map((peer, idx) => {
            return <CompFinderItem key={`${peer}-${idx}`} ticker={peer} />;
          })
        ) : (
          <div className="p-2 text-sm text-gray-600">No peers found</div>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CompFinder;
