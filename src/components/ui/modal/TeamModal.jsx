import { IoCloseOutline } from 'react-icons/io5';

export default function TeamModal({ onClose, member }) {
  if (!member) return null;

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-screen p-2 bg-black/60 backdrop-blur-md flex items-center justify-center">
      {/* Close Button */}
      <div className="absolute top-6 right-6 bg-transparent hover:bg-white group rounded-full cursor-pointer transition-all duration-500 z-50">
        <IoCloseOutline className="text-white group-hover:text-black" size={36} onClick={onClose} />
      </div>

      {/* Modal Content */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6 max-w-5xl w-full max-h-[90vh] overflow-hidden">
        {/* Left Section */}
        <div className="flex flex-col md:min-w-80 items-start md:max-w-80 w-full">
          <img
            src={member.image}
            alt={member.name}
            className="w-full rounded-xl object-cover shadow-md"
          />
          <h2 className="text-xl font-reenie font-bold mt-3">{member.name}</h2>
          <p className="text-sm text-gray-600">{member.title}</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <p className="text-gray-600 font-semibold mb-2 text-left">Bio</p>
          <div className="text-gray-800 text-justify overflow-y-auto pr-2 flex-1">
            {member.description}
          </div>
        </div>
      </div>
    </div>
  );
}
