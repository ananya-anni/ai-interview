import { BENEFIT_POINTS } from "../constants/Constants";
import { FaCheckCircle } from "react-icons/fa";

const BenefitsContainer = () => {
  return (
    <div className="hidden xl:flex flex-col w-[30%] bg-linear-to-b from-[#FAFAFF] via-[#F7F8FD] to-[#F5F6FC] p-3 rounded-lg">
      <div>Why upload your resume?</div>
      {BENEFIT_POINTS.map((point) => (
        <div key={point} className="flex items-center gap-3 m-0.5">
          <FaCheckCircle className="text-violet-700" />
          <span className="text-sm">{point}</span>
        </div>
      ))}
    </div>
  );
};

export default BenefitsContainer;
