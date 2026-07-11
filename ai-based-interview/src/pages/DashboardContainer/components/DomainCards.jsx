import { DOMAIN } from "../constants/Constants";
import DomainCard from "./DomainCard";

const DomainCards = ({ limit }) => {
  return (
    <div
      className="  grid
        grid-cols-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
    >
      {DOMAIN?.slice(0, limit)?.map((domain, index) => (
        <DomainCard key={domain.id} domain={domain} index={index} />
      ))}
    </div>
  );
};

export default DomainCards;
