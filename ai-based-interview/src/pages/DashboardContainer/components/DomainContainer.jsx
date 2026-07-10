import { FaArrowRight } from "react-icons/fa";
import DomainCards from "./DomainCards";
const DomainContainer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full justify-between p-2 sm:p-4">
        <h2 className="font-semibold">Choose your Interview Domain</h2>
        <div className="flex justify-center items-center gap-1 sm:gap-3 text-violet-700">
          <span className="cursor-pointer">View More</span>
          <FaArrowRight />
        </div>
      </div>

      <DomainCards limit={10} />
    </div>
  );
};

export default DomainContainer;

// flex flex-wrap gap-3 bg-white p-3 justify-center m-auto
