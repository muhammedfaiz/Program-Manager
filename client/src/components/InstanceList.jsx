import noInstance from "../assets/no-instance.svg";
import add from "../assets/add.svg";
import search from "../assets/search.svg";
import filter from "../assets/filter.svg";
import imprt from "../assets/import.svg";
import exprt from "../assets/export.svg";
import scan from "../assets/scan.svg";
import { useEffect, useState } from "react";
import AddInstance from "./AddInstance";
import EditInstance from "./EditInstance";
import DeleteModal from "./DeleteModal";
import { getInstances } from "../serivces/instanceService";
import { toast } from "react-toastify";

const InstanceList = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [Instances, setInstances] = useState([]);

  useEffect(() => {
    const fetchInstance = async () => {
      try {
        const response = await getInstances();
        if (response.status == 200) {
          setInstances(response.data);
        }
      } catch (error) {
        toast.error("Something went wrong");
        console.error(error);
      }
    };
    fetchInstance();
  }, [isAddOpen, isDeleteOpen, isEditOpen]);

  return (
    <div className="p-4 md:p-8 w-full md:w-[75%] min-h-full">
      <p className="text-lg font-medium">Instance</p>

      {Instances.length > 0 ? (
        <>
          <div className="flex flex-wrap gap-2 md:flex-nowrap items-center justify-between my-5">
            <div className="flex gap-2 md:gap-5">
              <button className="flex border p-2 rounded-lg items-center">
                <img src={search} alt="search" />
              </button>
              <button className="flex items-center gap-2 border py-2 px-3 rounded-lg text-gray-500 font-medium">
                <img src={filter} alt="filter" />
                <span className="hidden md:inline">Filter</span>
              </button>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-5 items-center">
              <button className="flex items-center gap-2 border py-2 px-3 rounded-lg text-gray-500 font-medium">
                <img src={imprt} alt="import" />
                <span className="hidden md:inline">Import</span>
              </button>
              <button className="flex items-center gap-2 border py-2 px-3 rounded-lg text-gray-500 font-medium">
                <img src={exprt} alt="export" />
                <span className="hidden md:inline">Export</span>
              </button>
              <button
                className="bg-blue-700 hover:bg-blue-600 text-white flex items-center gap-2 px-3 py-2 rounded-lg"
                onClick={() => {
                  setIsAddOpen(true);
                }}
              >
                <img src={add} alt="add" />
                <span className="hidden md:inline">Add Instance</span>
              </button>
            </div>
          </div>

          <div className="w-full bg-white">
            <table className="min-w-full">
              <thead>
                <tr className="bg-weak rounded-md">
                  <th className="text-left py-4 px-2 md:px-6 text-[13px] text-gray-500">
                    Instance Name
                  </th>
                  <th className="hidden md:table-cell text-left py-4 px-2 md:px-6 text-[13px] text-gray-500">
                    Included Participant Types
                  </th>
                  <th className="hidden md:table-cell text-left py-4 px-2 md:px-6 text-[13px] text-gray-500">
                    Included Tickets
                  </th>
                  <th className="text-left py-4 px-2 md:px-6 text-[13px] text-gray-500">
                    Alloted
                  </th>
                  <th className="text-left py-4 px-2 md:px-6 text-[13px] text-gray-500">
                    Checkin
                  </th>
                  <th className="hidden md:table-cell text-left py-4 px-2 md:px-6 text-[13px] text-gray-500">
                    Pending
                  </th>
                  <th className="text-left py-4 px-2 md:px-6 text-[13px] text-gray-500"></th>
                  <th className="text-left py-4 px-2 md:px-6 text-[13px] text-gray-500"></th>
                </tr>
              </thead>
              <tbody className="text-[14px]">
                {Instances.map((row, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-4 px-2 md:px-6 text-gray-900 font-semibold">
                      {row.name}
                    </td>
                    <td className="hidden md:table-cell py-4 px-2 md:px-6 text-gray-600">
                      {row.participants.length > 2
                        ? `${row.participants.slice(0, 2).join(", ")}, +${
                            row.participants.length - 2
                          } more`
                        : row.participants.join(", ")}
                    </td>
                    <td className="hidden md:table-cell py-4 px-2 md:px-6 text-gray-600">
                      {row.tickets.length > 2
                        ? `${row.tickets.slice(0, 2).join(", ")}, +${
                            row.tickets.length - 2
                          } more`
                        : row.tickets.join(", ")}
                    </td>
                    <td className="py-4 px-2 md:px-6">
                      <span className="text-blue-500 font-medium underline">
                        {row.alloted}
                      </span>
                    </td>
                    <td className="py-4 px-2 md:px-6">
                      <span className="text-blue-500 font-medium underline">
                        {row.checkin}
                      </span>
                    </td>
                    <td className="hidden md:table-cell py-4 px-2 md:px-6">
                      <span className="text-blue-500 font-medium underline">
                        {row.pending}
                      </span>
                    </td>
                    <td className="py-4 px-2 md:px-6">
                      <button className="flex items-center justify-between gap-2 text-gray-600 border py-2 px-3 rounded-lg">
                        <img src={scan} alt="scan" />
                        <span className="hidden md:inline">Scan</span>
                      </button>
                    </td>
                    <td className="py-4 px-2 md:px-6 relative">
                      <button
                        className="text-gray-600"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === row._id ? null : row._id
                          )
                        }
                      >
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="1" />
                          <circle cx="12" cy="5" r="1" />
                          <circle cx="12" cy="19" r="1" />
                        </svg>
                      </button>
                      {/* Dropdown */}
                      {openDropdown === row._id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                          <button
                            className="w-full px-4 py-2 text-left text-md text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                              setIsEditOpen(true);
                              setEditId(row._id);
                              setOpenDropdown(null);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="w-full px-4 py-2 text-left text-md text-red-600 hover:bg-gray-100"
                            onClick={() => {
                              setIsDeleteOpen(true);
                              setDeleteId(row._id);
                              setOpenDropdown(null);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center mt-10">
          <img className="w-1/2 h-auto md:w-[20%]" src={noInstance} alt="No instance" />
          <p className="text-gray-400 text-md mt-3">No Instance Found</p>
          <button
            className="bg-blue-700 hover:bg-blue-600 text-white px-3 py-2 rounded-lg mt-5 flex items-center gap-2"
            onClick={() => setIsAddOpen(true)}
          >
            <img src={add} alt="add" />
            <span>Add Instance</span>
          </button>
        </div>
      )}
      {isAddOpen && <AddInstance isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} />}
      {isEditOpen && <EditInstance isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} id={editId} />}
      {isDeleteOpen && <DeleteModal isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} id={deleteId} />}
    </div>
  );
};

export default InstanceList;
