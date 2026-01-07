import { FaEdit } from 'react-icons/fa';

export default function EditButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-600 transition text-sm"
    >
      <FaEdit />
      Edit
    </button>
  );
}
