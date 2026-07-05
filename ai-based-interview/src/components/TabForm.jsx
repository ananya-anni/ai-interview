import { useState } from "react";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
const TabForm = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabs = [
    { name: "Sign Up", component: SignUp },
    { name: "Login", component: Login },
  ];
  const ActiveComponent = tabs[tabIndex].component;

  const handleTabClick = (index) => {
    setTabIndex(index);
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen  bg-white">
        <div className="bg-white p-6 rounded-xl shadow-lg shadow-gray-300 sm:min-w-96 sm:p-16">
          {tabIndex === 0 ? (
            <h2 className="text-2xl font-semibold text-center m-6 mt-0">
              Create a new account
            </h2>
          ) : (
            <h2 className="text-2xl font-semibold text-center m-6 mt-0">
              Sign into your account
            </h2>
          )}

          <div className="flex w-full rounded-[5px]">
            {tabs.map((tab, index) => (
              <div
                className={`p-2 h-full w-[50%] text-center bg-[rgba(223,224,225,0.98)] mb-3 text-gray-500 ${
                  index === tabIndex && "bg-blue-500 text-white"
                } transition-all duration-300 `}
                key={tab.name}
                onClick={() => handleTabClick(index)}
              >
                {tab.name}
              </div>
            ))}
          </div>
          <div>
            <ActiveComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default TabForm;
