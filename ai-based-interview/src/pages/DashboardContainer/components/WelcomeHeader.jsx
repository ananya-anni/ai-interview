import Header from "../../../common-components/Header";
import WelcomeMessage from "./WelcomeMessage";

const WelcomeHeader = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-between lg:pr-16">
      <Header />
      <WelcomeMessage />
    </div>
  );
};

export default WelcomeHeader;
