import dashboard from "../assets/dashboard.svg";
import config from "../assets/config.svg";
import website from "../assets/website.svg";
import exhibitors from "../assets/exhibitors.svg";
import print from "../assets/print.svg";
import registor from "../assets/registor.svg";
import insta from "../assets/insta.svg";
import reports from "../assets/reports.svg";
import settings from "../assets/settings.svg";
import revert from "../assets/revert.svg";
import { useState } from "react";

let barItems = [
  {
    id: 1,
    name: "Dashboard",
    icon: dashboard,
  },
  {
    id: 2,
    name: "Configure",
    icon: config,
  },
  {
    id: 3,
    name: "Website",
    icon: website,
  },
  {
    id: 4,
    name: "Exhibitors",
    icon: exhibitors,
  },
  {
    id: 5,
    name: "Print",
    icon: print,
  },
  {
    id: 6,
    name: "Registrations",
    icon: registor,
  },
  {
    id: 7,
    name: "Insta Snap",
    icon: insta,
  },
  {
    id: 8,
    name: "Reports",
    icon: reports,
  },
  {
    id: 9,
    name: "Settings",
    icon: settings,
  },
];

const Sidebar = () => {
  const [clicked, setClicked] = useState("Configure");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <button
        className="fixed bottom-4 right-4 md:hidden z-50 bg-blue-700 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-40 transition-transform duration-300 w-24 md:w-[7.4%] py-6 flex flex-col border-r min-h-full justify-between gap-10 bg-white`}>
        <div className="gap-2 flex flex-col">
          {barItems?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center py-[8px] px-[5px] gap-1 cursor-pointer"
              onClick={() => {
                setClicked(item.name);
                setIsSidebarOpen(false);
              }}
            >
              <img src={item.icon} className="w-[13.5px] h-[13.5px]" />
              <p
                className={`text-xs font-semibold ${
                  item.name == clicked ? "text-blue-500" : "text-gray-500"
                }`}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <button className="border-2 p-2 rounded-lg">
            <img src={revert} alt="revert" />
          </button>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
