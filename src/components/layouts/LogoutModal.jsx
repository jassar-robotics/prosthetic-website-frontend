const LogoutModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 flex flex-col gap-2 items-center rounded-md shadow-lg w-full max-w-sm">
        <p className=" font-semibold text-md text-B400">Confirm Logout!</p>
        <p className="mb-2">Are you sure you want to logout?</p>
        <div className="flex text-sm justify-end gap-4">
          <button
            onClick={onConfirm}
            className="px-3 py-2 rounded-md bg-red-500 text-white hover:bg-red-700"
          >
            Logout
          </button>
          <button onClick={onCancel} className="px-3 py-2 rounded-md text-gray-700 hover:bg-G200">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
