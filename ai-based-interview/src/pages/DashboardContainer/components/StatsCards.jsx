import StatCard from "./StatCard";
import { STATS_OVERVIEW } from "../constants/Constants";
const StatsCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {STATS_OVERVIEW.map((individualStat) => (
        <StatCard key={individualStat.id} individualStat={individualStat} />
      ))}
    </div>
  );
};

export default StatsCards;
