import { FiMinus, FiPlus } from 'react-icons/fi';

import { BASE_MEDIA_URL } from '@/config/baseurl.js';
import DOMPurify from 'dompurify';

const SCHEDULE = ({ schedule, isOpened, handleScheduleState }) => {
  const arrowSVG = isOpened ? (
    <FiMinus className="h-fit min-w-5 max-w-5 self-center" />
  ) : (
    <FiPlus className="h-fit min-w-5 max-w-5 self-center" />
  );

  const sanitizedContent = DOMPurify.sanitize(schedule?.detail);
  const headingBg = isOpened ? 'rounded-t-md bg-B200' : 'rounded-md bg-B100';
  return (
    <div className="cursor-pointer w-full mx-auto select-none">
      <button
        onClick={() => handleScheduleState(schedule?.id)}
        className={`w-full text-left ${headingBg} p-4  shadow-xs transition duration-300 ease-in-out`}
        aria-expanded={isOpened}
      >
        <div className="flex justify-between items-center font-semibold">
          <span>
            {' '}
            Day {schedule?.day}: {schedule.heading}
          </span>
          {arrowSVG}
        </div>
      </button>

      {isOpened && (
        <div className="group bg-B50 p-4 pt-0 rounded-b-md shadow-xs bg-B100 text-left flex flex-col justify-between gap-4">
          <div
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            className="text-justify custom-rich-content"
          />
          {schedule?.gallery?.length > 0 && (
            <div className="flex gap-2 relative overflow-x-auto max-h-64 scroll-smooth snap-x snap-mandatory rounded-md h-[400px] z-0 custom-scrollbar">
              {schedule.gallery.map((item, index) => (
                <div
                  key={index}
                  className="h-full flex items-center  snap-start shrink-0 "
                  onClick={() => {
                    openGalleryOption(schedule?.gallery, index);
                  }}
                >
                  <img
                    decoding="async"
                    alt={`Trek Itinerary Gallery ${index + 1}`}
                    loading="lazy"
                    src={BASE_MEDIA_URL + item.image}
                    className="object-cover h-full  w-auto max-w-full transition-all duration-500 ease-in-out rounded-md"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SCHEDULE;
