type Props = {
  config: any;
  data: any;
};

const RatioList = ({ config, data }: Props) => {
  const renderedCells = config.map((row: any, index: number) => {
    return (
      <li key={index} className="py-5 sm:py-6">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr)_auto] items-center">
          <div>
            <p className="text-sm font-semibold text-slate-900 truncate">{row.label}</p>
            {row.subTitle && (
              <p className="mt-1 text-sm leading-5 text-slate-500">{row.subTitle}</p>
            )}
          </div>
          <div className="text-xl font-semibold text-slate-900 text-right sm:text-left">
            {row.render(data)}
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="bg-white shadow-xl rounded-[1.5rem] p-5 sm:p-6 w-full border border-slate-200">
      <ul className="divide-y divide-slate-200">{renderedCells}</ul>
    </div>
  );
};

export default RatioList;
