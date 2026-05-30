import React from "react";

type Props = {
  title: string;
  subTitle: string;
};

const Tile = ({ title, subTitle }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all">
      <h5 className="text-gray-600 uppercase text-sm font-semibold tracking-wide mb-2">
        {title}
      </h5>
      <p className="text-2xl sm:text-3xl font-bold text-gray-900 break-words">
        {subTitle}
      </p>
    </div>
  );
};

export default Tile;
