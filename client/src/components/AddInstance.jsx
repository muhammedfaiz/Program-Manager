import { useState } from "react";
import { addInstance } from "../serivces/instanceService";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const AddInstance = ({isOpen,onClose}) => {
    const [data,setData]=useState({
        name:'',
        participants:[],
        tickets:[],
        alloted:0,
        checkin:0
    });
    const handleAdd = async(e)=>{
       try{ e.preventDefault();
        const response = await addInstance(data);
        if(response.status == 201){
          toast.success(response.data);
          onClose();
        }
      }
        catch(err){
          toast.error(err.data);
        }
    }
  return (
        <>
          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
              <div className="bg-white rounded-lg w-full max-w-2xl my-8">
                <div className="flex justify-between items-center p-4 sm:p-6 border-b">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Add Instance</h2>
                  <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 p-2"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
    
                <form onSubmit={handleAdd} className="p-4 sm:p-6">
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Instance Name
                      </label>
                      <input
                        type="text"
                        name="instanceName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                        placeholder="Enter instance name"
                        value={data.instanceName}
                        onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))}
                      />
                    </div>
    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Participant Types
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="volunteers"
                            name="participantTypes"
                            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            onChange={(e)=>setData((prev)=>(e.target.checked?{...prev,participants:[...data.participants,e.target.id]}:{...prev}))}
                          />
                          <label htmlFor="volunteers" className="text-sm text-gray-700">
                            Volunteers
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="guests"
                            name="participantTypes"
                            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            onChange={(e)=>setData((prev)=>(e.target.checked?{...prev,participants:[...data.participants,e.target.id]}:{...prev}))}
                          />
                          <label htmlFor="guests" className="text-sm text-gray-700">
                            Guests
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="speakers"
                            name="participantTypes"
                            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            onChange={(e)=>setData((prev)=>(e.target.checked?{...prev,participants:[...data.participants,e.target.id]}:{...prev}))}
                          />
                          <label htmlFor="others" className="text-sm text-gray-700">
                            Speakers
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="attendees"
                            name="participantTypes"
                            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            onChange={(e)=>setData((prev)=>(e.target.checked?{...prev,participants:[...data.participants,e.target.id]}:{...prev}))}
                          />
                          <label htmlFor="others" className="text-sm text-gray-700">
                            Attendees
                          </label>
                        </div>
                      </div>
                    </div>
    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Include Tickets
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="ticket01"
                            name="tickets"
                            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            onChange={(e)=>setData((prev)=>(e.target.checked?{...prev,tickets:[...data.tickets,e.target.id]}:{...prev}))}
                          />
                          <label htmlFor="ticket01" className="text-sm text-gray-700">
                            Ticket 01
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="ticket02"
                            name="tickets"
                            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            onChange={(e)=>setData((prev)=>(e.target.checked?{...prev,tickets:[...data.tickets,e.target.id]}:{...prev}))}
                          />
                          <label htmlFor="ticket02" className="text-sm text-gray-700">
                            Ticket 02
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="ticket03"
                            name="tickets"
                            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            onChange={(e)=>setData((prev)=>(e.target.checked?{...prev,tickets:[...data.tickets,e.target.id]}:{...prev}))}
                          />
                          <label htmlFor="ticket03" className="text-sm text-gray-700">
                            Ticket 03
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="ticket04"
                            name="tickets"
                            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            onChange={(e)=>setData((prev)=>(e.target.checked?{...prev,tickets:[...data.tickets,e.target.id]}:{...prev}))}
                          />
                          <label htmlFor="ticket03" className="text-sm text-gray-700">
                            Ticket 04
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="ticket05"
                            name="tickets"
                            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            onChange={(e)=>setData((prev)=>(e.target.checked?{...prev,tickets:[...data.tickets,e.target.id]}:{...prev}))}
                          />
                          <label htmlFor="ticket03" className="text-sm text-gray-700">
                            Ticket 05
                          </label>
                        </div>
                      </div>
                    </div>
    
                    <div className="sm:max-w-xs">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Allotted Count
                      </label>
                      <input
                        type="number"
                        name="allotted"
                        value={data.alloted}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                        placeholder="Enter allotted count"
                        onChange={(e)=>setData((prev)=>({...prev,alloted:e.target.value}))}
                      />
                    </div>
                    <div className="sm:max-w-xs">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Checkin Count
                      </label>
                      <input
                        type="number"
                        name="checkin"
                        value={data.checkin}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                        placeholder="Enter checkin count"
                        onChange={(e)=>setData((prev)=>({...prev,checkin:e.target.value}))}
                      />
                    </div>
                  </div>
    
                  <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-6 sm:mt-8">
                    <button
                      type="button"
                      onClick={onClose}
                      className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Add Instance
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </>
  )
}
export default AddInstance