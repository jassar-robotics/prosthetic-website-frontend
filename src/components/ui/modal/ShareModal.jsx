import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { BiLogoGmail } from 'react-icons/bi';
import { FaRedditAlien, FaWhatsapp } from 'react-icons/fa';
import { FaFacebook, FaXTwitter } from 'react-icons/fa6';
import { IoCloseOutline, IoCopyOutline } from 'react-icons/io5';

import { FaPinterestP } from 'react-icons/fa';

import Share from '@/data/Share.json';
import Lottie from 'lottie-react';

function ShareModal({ onClose, id, type = 'trek' }) {
  const { copy } = useCopyToClipboard();

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-screen    bg-black/60 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out flex flex-col gap-5 items-center justify-center">
      <div className="p-4 w-full  relative md:w-2/3 ">
        <div className="rounded-xl relative bg-G100 p-8 flex  md:flex-row flex-col items-center  md:justify-start  gap-2">
          <IoCloseOutline
            className="text-black absolute top-5 right-5 cursor-pointer"
            size={32}
            onClick={onClose}
          />

          <Lottie
            animationData={Share}
            loop={true}
            autoplay={true}
            className="md:w-1/2   w-full h-full border-B100 border-r-2  "
          />
          <div className="md:w-1/2 w-full flex flex-col gap-4">
            <div className="font-liches text-xl"> SHARE VIA</div>
            <div
              className="p-2 flex justify-between gap-4 w-full cursor-pointer hover:bg-G200 transition-colors duration-500 ease-in-out  items-center border border-N400 rounded-md"
              onClick={() => {
                copy(`https://PROJECT_NAME.com/${type}/${id}`);
              }}
            >
              <div className="line-clamp-1 text-sm">
                https://PROJECT_NAME.com/{type}/{id}
              </div>
              <IoCopyOutline className="size-10" />
            </div>

            <div className="flex gap-4 flex-wrap items-center justify-center">
              <a
                href={`https://api.whatsapp.com/send?text=https://PROJECT_NAME.com/${type}/${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 hover:bg-G200 transition-colors duration-500 ease-in-out"
              >
                <FaWhatsapp className="size-6" />
              </a>

              <a
                href={`mailto:?subject=Check this out!&body=https://PROJECT_NAME.com/${type}/${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 hover:bg-G200 transition-colors duration-500 ease-in-out"
              >
                <BiLogoGmail className="size-6" />
              </a>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://PROJECT_NAME.com/${type}/${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 hover:bg-G200 transition-colors duration-500 ease-in-out"
              >
                <FaFacebook className="size-6" />
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=https://PROJECT_NAME.com/${type}/${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 hover:bg-G200 transition-colors duration-500 ease-in-out"
              >
                <FaXTwitter className="size-6" />
              </a>
              <a
                href={`https://pinterest.com/pin/create/button/?url=https://PROJECT_NAME.com/${type}/${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 hover:bg-G200 transition-colors duration-500 ease-in-out"
              >
                <FaPinterestP className="size-6" />
              </a>
              <a
                href={`https://www.reddit.com/submit?url=https://PROJECT_NAME.com/${type}/${id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 hover:bg-G200 transition-colors duration-500 ease-in-out"
              >
                <FaRedditAlien className="size-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
