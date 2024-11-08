import { toast } from "react-toastify";
import { deleteInstance } from "../serivces/instanceService";

// eslint-disable-next-line react/prop-types
const DeleteModal = ({ isOpen, onClose, id }) => {
  const handleDelete = async () => {
    try {
      const response = await deleteInstance(id);
      if (response.status === 200) {
        toast.success(response.data);
        onClose();
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete instance");
    }
  }
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all w-full max-w-md">
          <div className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Delete Instance
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Are you sure you want to delete instance? This action cannot be
                undone.
              </p>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
