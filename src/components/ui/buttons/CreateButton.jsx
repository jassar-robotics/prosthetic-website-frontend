import { FaPlus } from 'react-icons/fa';

export default function CreateButton({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 h-fit py-2 bg-G500 text-white rounded hover:bg-G700 transition-colors duration-500 text-sm font-light"
    >
      <FaPlus />
      {text}
    </button>
  );
}
