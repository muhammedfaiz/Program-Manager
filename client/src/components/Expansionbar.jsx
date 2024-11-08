import orders from "../assets/orders.svg";
import orderSummary from "../assets/order-summary.svg";
import attendees from "../assets/attendees.svg";
import missedRegistration from "../assets/missed-registration.svg";
import approval from "../assets/approval.svg";
import attendence from '../assets/attendence.svg';
import attendenceSummary from '../assets/attendence-summary.svg';
import { useState } from "react";


const Registrations = [
  {
    id: 1,
    title: "Orders",
    icon: orders,
  },
  {
    id: 2,
    title: "Order Summary",
    icon: orderSummary,
  },
  {
    id: 3,
    title: "Attendees",
    icon: attendees,
  },
  {
    id: 4,
    title: "Missed Registrations",
    icon: missedRegistration,
  },
  {
    id: 5,
    title: "Approval",
    icon: approval,
  },
];

const attendences = [
    {
        id: 1,
        title: "Attendence",
        icon: attendence,
    },
    {
        id: 2,
        title: "Attendence Summary",
        icon: attendenceSummary,
    }
]

const checkin = [
    {
        id: 1,
        title: "Instance",
        icon: attendence,
    },
    {
        id:2,
        title:"Instance Checkin",
        icon: attendenceSummary,
    }
]

const Expansionbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <button
        className="fixed bottom-4 left-4 md:hidden z-50 bg-blue-700 text-white p-3 rounded-full shadow-lg"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className={`${isExpanded ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-30 transition-transform duration-300 w-64 md:w-[16%] min-h-full p-5 border-r bg-white flex flex-col gap-3`}>
        <div>
          <p className="text-gray-400 text-sm">REGISTRATION</p>
          <div className="mt-2">
            {Registrations?.map((item) => (
              <div
                key={item.id}
                className="flex items-center px-2 my-4 gap-2 cursor-pointer"
                onClick={() => setIsExpanded(false)}
              >
                <img src={item.icon} alt="" />
                <p className="text-gray-500 font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-gray-400 text-sm">ATTENDENCE</p>
          <div className="mt-2">
            {attendences?.map((item) => (
              <div
                key={item.id}
                className="flex items-center px-2 my-4 gap-2 cursor-pointer"
                onClick={() => setIsExpanded(false)}
              >
                <img src={item.icon} alt="" />
                <p className="text-gray-500 font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-gray-400 text-sm">CHECKIN INSTANCE</p>
          <div className="mt-2">
            {checkin?.map((item) => (
              <div
                key={item.id}
                className="flex items-center px-2 my-4 gap-2 cursor-pointer"
                onClick={() => setIsExpanded(false)}
              >
                <img src={item.icon} alt="" />
                <p className="text-gray-500 font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Expansionbar;
