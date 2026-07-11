import { BiUpArrowAlt } from "react-icons/bi";
import { TbArrowZigZag } from "react-icons/tb";
const StatCard = ({ individualStat }) => {
  const Icon = individualStat.icon;
  return (
    <div className="flex flex-col justify-center items-center xs:flex-row gap-3 bg-white rounded-xl shadow-md shadow-gray-300 p-3 flex-1 shrink-0">
      <div
        className={`w-8 h-8  ${individualStat.iconBackground} rounded-lg flex justify-center items-center`}
      >
        <Icon className="text-white w-12 h-12 text-xl" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-sm font-medium text-gray-500">
          {individualStat.heading}
        </h3>
        <div className="font-bold text-lg">{individualStat.data}</div>
        {individualStat.change && (
          <div className="text-green-700 mt-2 flex items-center gap-1 self-end">
            <BiUpArrowAlt className="w-6 h-6" />
            <span className="text-sm">{`${individualStat.change} more`}</span>
            <span>
              <TbArrowZigZag className="hidden xs:block w-6 h-6" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
