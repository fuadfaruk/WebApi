import React from "react";

type Props = {
  title: string;
  subTitle: string;
};

const Tile = ({ title, subTitle }: Props) => {
  return (
    <div className="group bg-slate-50 border border-slate-200 rounded-[1.5rem] p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
      <div className="mb-3">
        <span className="inline-flex rounded-full bg-lightBlue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-lightBlue">
          {title}
        </span>
      </div>
      <p className="text-3xl sm:text-4xl font-semibold text-slate-950 break-words">
        {subTitle}
      </p>
    </div>
  );
};

export default Tile;
