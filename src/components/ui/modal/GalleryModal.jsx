import EmblaGalleryCarousel from '@/components/ui/carousel/EmblaGalleryCarousel.jsx';
import { BASE_MEDIA_URL, CLOUDINARY_BASE_MEDIA_URL } from '@/config/baseurl.js';
import { IoCloseOutline } from 'react-icons/io5';
export default function GalleryModal({ onClose, gallery = [], startIndex = 0, cloud = true }) {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-screen p-2 bg-black/60 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out flex flex-col gap-5 items-center">
      <div className="bg-transparent hover:bg-white group rounded-full z-20 cursor-pointer right-6 hover:scale-105 scale-100 transition-all duration-500 self-end">
        <IoCloseOutline className="text-white group-hover:text-black" size={32} onClick={onClose} />
      </div>
      <EmblaGalleryCarousel startIndex={startIndex}>
        {gallery.map((item, index) => (
          <div
            key={index}
            className="embla__slide rounded-md flex justify-center items-center max-h-[90vh] max-w-[90vw]"
          >
            
            
            <div className="relative w-full h-screen flex justify-center items-center rounded-md overflow-hidden">
                <img
                  alt={`Gallery Image ${index}`}
                  src={cloud ? CLOUDINARY_BASE_MEDIA_URL + item.image : BASE_MEDIA_URL + item.image}
                  className="max-w-full max-h-full w-auto h-auto object-contain transition-all duration-500 ease-in-out rounded-md"
                />
              </div>
          </div>
        ))}
      </EmblaGalleryCarousel>
    </div>
  );
}
