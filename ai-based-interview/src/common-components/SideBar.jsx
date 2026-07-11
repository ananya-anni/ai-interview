import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineComputer } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
const SideBar = () => {
  return (
    <div className="hidden md:flex md:flex-col md:bg-[#172757] md:min-w-57.5 md:h-screen md:text-white md:rounded-lg md:p-4">
      <div className="m-4">
        <h2 className="text-white font-semibold text-xl">AI Interviewer</h2>
        <p className="text-gray-200 text-sm">Your AI Career Coach</p>
      </div>

      <div>
        <div className="flex   p-4 items-center gap-3 text-gray-200 text-md cursor-pointer bg-[rgba(75,73,200,0.8)] rounded-lg">
          <div>
            <IoHomeOutline />
          </div>
          <div>Dashboard</div>
        </div>

        <div className="flex   p-4 items-center gap-3 text-gray-200 text-md cursor-pointer">
          <div>
            <MdOutlineComputer />
          </div>
          <div>Interviews</div>
        </div>

        <div className="flex  p-4 items-center gap-3 text-gray-200 text-md cursor-pointer">
          <div>
            <GiProgression />
          </div>
          <div>My Progress</div>
        </div>

        <div className="flex p-4 items-center gap-3 text-gray-200 text-md cursor-pointer">
          <div>
            <IoIosSettings />
          </div>
          <div>Settings</div>
        </div>
      </div>

      <div className=" sticky bottom-2 flex items-center text-md gap-3 border-[0.25px] border-gray-300 rounded-md p-2 mt-auto mb-3">
        <div>
          <FaRegUserCircle />
        </div>
        <div>
          <div>Anushika Priya</div>
          <div className="text-sm">anushika@gmail.com</div>
        </div>
        <div>
          <RiArrowDropDownLine />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
