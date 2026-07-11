import { RxHamburgerMenu } from "react-icons/rx";
import { PiStarFourFill } from "react-icons/pi";
import { FaFire } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="md:hidden">
        <RxHamburgerMenu className="w-5 h-5 " />
      </div>
      <div className="hidden md:flex md:justify-center md:items-center shadow shadow-gray-200 bg-white text-sm p-2 rounded-lg ml-2 mr-3 gap-3">
        <IoMdSearch className="w-5 h-5" />
        <input
          id="userSearchText"
          type="text"
          placeholder="Search for anything..."
          className="border-none "
        />
      </div>
      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <PiStarFourFill className="w-5 h-5 md:hidden" />
          <div className="bg-white flex p-1 shadow-sm shadow-gray-300 rounded-lg items-center gap-3">
            <FaFire className="w-5 h-5" />
            <span className="text-xs font-bold">7 days streak</span>
          </div>
        </div>

        <div className="relative w-fit p-1 bg-white justify-center items-center shadow-sm shadow-gray-300">
          <IoMdNotificationsOutline className="w-5 h-5" />
          <span className="absolute -right-1 -top-1 z-10">3</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
