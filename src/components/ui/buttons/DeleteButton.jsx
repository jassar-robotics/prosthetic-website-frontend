import { FaTrash } from 'react-icons/fa';

export default function DeleteButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm"
    >
      <FaTrash />
      Delete
    </button>
  );
}
