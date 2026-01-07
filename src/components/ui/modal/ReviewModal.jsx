import { IoCloseOutline } from 'react-icons/io5';
export default function GalleryModal({ onClose, video_url }) {
  return (
    <div className="fixed top-0  left-0 z-50 w-full h-screen p-2 bg-black/60 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out flex flex-col gap-5 items-center">
      <div className="absolute w-full h-full"></div>

      <div className="bg-transparent hover:bg-white group rounded-full z-20 cursor-pointer right-6 hover:scale-105 scale-100 transition-all duration-500 self-end">
        <IoCloseOutline className="text-white group-hover:text-black" size={32} onClick={onClose} />
      </div>
      <div className="relative h-[100vh]  max-w-[100vw] w-full max-h-[100vh] rounded-md flex justify-center items-center">
        <div className="absolute w-full h-full"></div>
        <iframe
          className="max-h-full w-full h-full  transition-all duration-500 ease-in-out rounded-lg"
          src={`https://www.youtube.com/embed/${video_url}?autoplay=1&controls=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
