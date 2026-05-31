type Props = {
  config: any;
  data: any;
};

const Table = ({ config, data }: Props) => {
  const renderedRows = data.map((company: any, index: number) => {
    return (
      <tr key={company.cik ?? index} className="odd:bg-white even:bg-slate-50 hover:bg-slate-100">
        {config.map((val: any, cellIndex: number) => {
          return (
            <td key={cellIndex} className="p-4 text-sm text-slate-700 align-top">
              {val.render(company)}
            </td>
          );
        })}
      </tr>
    );
  });
  const renderedHeaders = config.map((config: any, index: number) => {
    return (
      <th
        className="px-4 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]"
        key={`header-${index}`}
      >
        {config.label}
      </th>
    );
  });
  return (
    <div className="bg-white shadow-xl rounded-[1.5rem] p-4 sm:p-6 xl:p-8 overflow-x-auto">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50 border-b border-slate-200">{renderedHeaders}</thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
