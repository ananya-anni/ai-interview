import { BsCloudFog } from "react-icons/bs";
import { TEXTCOLORS } from "../constants/Constants";
import { COLORS } from "../constants/Constants";
const DomainCard = ({ domain, index }) => {
  return (
    <div className="p-3 border-[0.25px] border-gray-300 rounded-lg flex gap-3 justify-center items-center bg-white sm:justify-start transition-all duration-300 hover:bg-violet-50 hover:border-violet-500 hover:-translate-y-1 shadow shadow-gray-300 cursor-pointer">
      <div
        className={`rounded-xl w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center`}
        style={{
          backgroundColor: `${COLORS[index % COLORS.length]}`,
          color: `${TEXTCOLORS[index % COLORS.length]}`,
        }}
      >
        <BsCloudFog className="w-6 h-6 font-bold" />
      </div>

      <div className="hidden sm:flex flex-col">
        <h2>{domain.name}</h2>
        <div>{`${domain?.skills?.length} topics`}</div>
      </div>
    </div>
  );
};

export default DomainCard;
