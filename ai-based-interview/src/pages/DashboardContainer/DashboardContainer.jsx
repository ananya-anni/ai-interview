import SideBar from "../../common-components/SideBar";
import MainContainer from "./components/MainContainer";
const DashboardContainer = () => {
  return (
    <div className="flex flex-row ">
      <SideBar className="w-[30%]" />

      <div className="p-4 min-h-screen md:h-screen md:overflow-y-auto flex-1 bg-linear-to-b from-[#FAFAFF] via-[#F7F8FD] to-[#F5F6FC]">
        <MainContainer />
      </div>
    </div>
  );
};

export default DashboardContainer;
