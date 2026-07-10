import resumeImage from "../../../images/resumeImage.png";
import { FiUpload } from "react-icons/fi";
import { FiUploadCloud } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";
import BenefitsContainer from "./BenefitsContainer";
const ResumeUploadSection = () => {
  const handleFileChange = () => {};
  return (
    <div className="flex flex-col gap-3 bg-linear-to-br from-[#FDFDFF] via-[#F9F7FF] to-[#F5F3FF] bg-linear-[90deg,#EEF2FF_0%,#F3EFFF_100%] justify-center items-center lg:items-start shadow shadow-purple-200">
      <div className=" rounded-lg flex p-4 lg:w-full xl:justify-between xl:items-center">
        <div className="hidden lg:block">
          <img src={resumeImage} className="w-50 h-50" alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex w-full gap-3">
            <div className="w-15 h-15 bg-white rounded-lg flex justify-center items-center lg:hidden">
              <FaRobot className="text-[#6C4CF6] w-10 h-10" />
            </div>
            <div>
              <h3 className="text-md font-semibold">Upload Your Resume</h3>
              <p className="text-sm">
                Upload your resume to get AI-powered feedback and better
                interview recommendations.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row">
            <input
              type="file"
              className="hidden"
              id="resume-upload"
              accept=".pdf"
              onChange={handleFileChange}
            />
            <button className=" lg:hidden w-full flex justify-center items-center p-3 rounded-lg border-[0.25px] border-gray-400 gap-3 cursor-pointer">
              <FiUpload />
              Upload Resume
            </button>

            <div className="hidden lg:flex w-full p-10 border border-dashed border-violet-300 bg-linear-to-b from-[#FAFAFF] via-[#F7F8FD] to-[#F5F6FC] flex-col justify-center items-center cursor-pointer hover:border-violet-500 hover:bg-violet-50">
              <FiUploadCloud className="text-4xl text-violet-600" />
              <p className="text-center">
                Drag and drop your resume here,or browse
              </p>
            </div>

            <button className=" w-full bg-linear-to-r from-[#6C4CF6]  to-[#7C3AED] text-white p-3 rounded-lg lg:w-fit h-fit lg:p-3 md:whitespace-nowrap md:self-center">
              Start Interview
            </button>
          </div>
        </div>

        <BenefitsContainer />
      </div>
    </div>
  );
};

export default ResumeUploadSection;
