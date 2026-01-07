import { BASE_MEDIA_URL } from '@/config/baseurl.js';
import DOMPurify from 'dompurify';
import { useEffect, useRef, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import Lottie from 'lottie-react';

import formatFloatValue from '@/utils/formatFloatValue.js';

import Accomodation from '@/data/Accomodation.json';
import Altitude from '@/data/Altitude.json';
import Distance from '@/data/Distance.json';
import Down from '@/data/Down.json';
import Duration from '@/data/Duration.json';
import Food from '@/data/Food.json';
import Transportation from '@/data/Transportation.json';

const TrekItenaryAccordion = ({ schedule, isOpened, handleScheduleState, onGalleryOpen }) => {
  const scrollRef = useRef(null);
  const hasInteractedRef = useRef(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  useEffect(() => {
    if (isOpened) {
      if (hasInteractedRef.current && scrollRef.current) {
        const yOffset = window.innerHeight * 0.2;
        const y = scrollRef.current.getBoundingClientRect().top + window.pageYOffset - yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [isOpened]);

  const sanitizedContent = DOMPurify.sanitize(schedule?.detail);
  const arrowSVG = !isOpened ? (
    <FaChevronDown className="h-fit min-w-7 max-w-7 self-center bg-G300 p-2 rounded-sm text-white" />
  ) : (
    <FaChevronUp className="h-fit min-w-7 max-w-7 self-center  bg-G300 p-2 rounded-sm text-white" />
  );

  const default_bg_color = isOpened ? 'bg-G200' : 'bg-white';
  const default_hover_bg_color = isOpened ? 'hover:bg-G200' : 'hover:bg-G100';

  const trekHeadings = [
    schedule?.max_altitude && {
      icon: Altitude,
      rotate: false,
      heading: 'Max Altitude',
      description: formatFloatValue(schedule.max_altitude) + ' meter',
    },

    schedule?.duration && {
      icon: Duration,
      rotate: false,
      heading: 'Duration',
      description: schedule.duration,
    },

    schedule?.distance && {
      icon: Distance,
      rotate: false,
      heading: 'Distance',
      description: formatFloatValue(schedule.distance) + ' Km',
    },

    schedule?.elevation_gain && {
      icon: Down,
      rotate: true,
      heading: 'Elevation Gain',
      description: formatFloatValue(schedule.elevation_gain) + ' meter',
    },

    schedule?.elevation_loss && {
      icon: Down,
      rotate: false,
      heading: 'Elevation Loss',
      description: formatFloatValue(schedule.elevation_loss) + ' meter',
    },

    schedule?.accomodations?.length && {
      icon: Accomodation,
      rotate: false,
      heading: 'Accomodation',
      description: schedule.accomodations
        .map((accomodation, index, arr) => {
          if (arr.length === 1) return accomodation.name;
          if (index === arr.length - 1) return ` or ${accomodation.name}`;
          if (index === arr.length - 2) return `${accomodation.name}`;
          return `${accomodation.name}, `;
        })
        .join(''),
    },

    schedule?.transportations?.name && {
      icon: Transportation,
      rotate: false,
      heading: 'Transportaion',
      description: schedule.transportations.name,
    },

    schedule?.meals?.length && {
      icon: Food,
      heading: 'Meal',
      rotate: false,
      description: schedule.meals
        .map((meal, index, arr) => {
          if (arr.length === 1) return meal.name;
          if (index === arr.length - 1) return ` & ${meal.name}`;
          if (index === arr.length - 2) return `${meal.name}`;
          return `${meal.name}, `;
        })
        .join(''),
    },
  ].filter(Boolean);

  const openGalleryOption = (gallery, selectedIndex) => {
    onGalleryOpen(gallery, selectedIndex);
  };

  return (
    <>
      <div
        ref={scrollRef}
        className="cursor-pointer w-full mx-auto select-none  flex flex-col gap-2 "
      >
        <div
          className={`${default_bg_color} ${default_hover_bg_color} sticky top-12  z-10 pt-4 rounded-md p-2 transition duration-300 ease-in-out  flex flex-row  gap-3  justify-start`}
          onClick={() => {
            hasInteractedRef.current = true;
            handleScheduleState(schedule.id);
          }}
        >
          <div className="flex flex-col  w-10 md:w-16 h-full items-center bg-white rounded-tl-lg">
            <div className="px-5 bg-G300 h-fit rounded-tl-lg w-full text-white items-center justify-center flex  text-base md:text-md">
              Day
            </div>
            <div className="w-full h-full flex justify-center items-center text-base md:text-md font-bold">
              {schedule.day}
            </div>
          </div>
          <div className="flex justify-between   w-full h-fit gap-2 ">
            <div className="font-bold text-base md:text-md">{schedule?.heading}</div>
            {arrowSVG}
          </div>
        </div>
        {isOpened && (
          <div
            className={`md:pl-20 p-4 rounded-md  overflow-hidden transition-max-height flex flex-col gap-3 duration-700 ease-in-out bg-G100`}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  w-full">
              {trekHeadings.map((item, index) =>
                item?.description ? (
                  <div
                    key={index}
                    className="rounded-xl flex gap-3 bg-G200  py-2 px-4   items-center justify-start overflow-hidden"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {item?.icon && (
                      <div className="sm:min-w-10 sm:max-w-10 max-w-8 min-w-8 aspect-square">
                        {item?.rotate ? (
                          <Lottie
                            animationData={item?.icon}
                            className="w-full h-full rotate-180"
                            loop={hoveredIndex === index}
                          />
                        ) : (
                          <Lottie
                            animationData={item?.icon}
                            className="w-full h-full"
                            loop={hoveredIndex === index}
                          />
                        )}
                      </div>
                    )}
                    <div className="flex flex-col justify-start items-start">
                      <div className="text-xs text-N500 font-semibold text-start">
                        {item?.heading}
                      </div>
                      <div className="text-xs sm:text-sm text-N800 font-semibold text-start ">
                        {item?.description}
                      </div>
                    </div>
                  </div>
                ) : (
                  ''
                ),
              )}
            </div>
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
    </>
  );
};

export default TrekItenaryAccordion;
