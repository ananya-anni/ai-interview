import WelcomeHeader from "./WelcomeHeader";
import StatsCards from "./StatsCards";
import ResumeUploadSection from "./ResumeUploadSection";
import DomainContainer from "./DomainContainer";
const MainContainer = () => {
  return (
    <div className="flex flex-col gap-5">
      <WelcomeHeader />
      <StatsCards />
      <ResumeUploadSection />
      <DomainContainer />
    </div>
  );
};

export default MainContainer;
