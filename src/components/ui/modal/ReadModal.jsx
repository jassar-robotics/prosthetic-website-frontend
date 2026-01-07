import { IoCloseOutline } from 'react-icons/io5';
import DOMPurify from 'dompurify';
import PageContainer from '@/components/layouts/PageContainer.jsx';
export default function GalleryModal({ onClose, text, type }) {
  return (
    <div className="fixed top-0  left-0 z-50 w-full h-screen p-2 bg-white/75 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out flex flex-col gap-5 items-center">
<PageContainer>
      
      <div className="w-full  relative rounded-xl border border-B300 max-h-[90vh] bg-white overflow-y-scroll">

      <div className="bg-transparent rounded-full bg-white group z-20 cursor-pointer fixed top-4 right-6 hover:scale-105 scale-100 transition-all duration-500 self-end">
        <IoCloseOutline className="text-black group-hover:text-black" size={32} onClick={onClose} />
      </div>
        <div className="flex justify-between  px-4 pt-4">
          <div className="text-lg font-liches text-start">{type}</div>
         
        </div>
        <div
          className={`text-justify custom-rich-content  p-4 h-fit rounded-xl select-none transition-all overflow-x-scroll  keep-scrollbar duration-500 ease-in-out `}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
        />
      </div>

    </PageContainer>
    </div>
  );
}
