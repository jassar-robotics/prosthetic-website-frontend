import badge from '@/assets/icons/badge.svg';
import ImageSkeleton from '@/components/ui/skeleton/ImageSkeleton.jsx';
import { CLOUDINARY_BASE_MEDIA_URL } from '@/config/baseurl.js';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Category from '@/data/Category.json';
import Difficulty from '@/data/Difficulty.json';
import Duration from '@/data/Duration.json';
import Pricing from '@/data/Pricing.json';
import Lottie from 'lottie-react';

const JourneyDetailsPanel = ({ icon, value, type, hover }) => {
  return (
    <div className="flex justify-between items-center gap-2   rounded-lg">
      <div className="min-w-7 max-w-7 aspect-square">
        <Lottie animationData={icon} className="w-full h-full" loop={hover} />
      </div>
      <span className="text-left">
        <span className="text-xs flex">{type}</span>
        <strong className="block text-xs">{value}</strong>
      </span>
    </div>
  );
};
const DayhikeTile = ({ data, type = 'Day Hike' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { slug, name, total_price, image, difficulty, avg_hike_hour, tag, isBadged, stars } = data;
  return (
    <Link
      aria-label={`Dayhike - ${name}`}
      to={`/dayhike/${slug}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative  bg-white  cursor-pointer group flex justify-between   flex-col  h-[500px] gap-2 rounded-lg overflow-hidden hover:shadow-lg shadow-md m-2 md:m-0   transition-all duration-500 border  border-N100  border-0.5"
    >
      <div className="flex flex-col gap-2 justify-start h-full ">
        <div className="relative overflow-hidden rounded-md w-full h-64">
          <ImageSkeleton
            className="relative w-full h-64  object-cover object-center group-hover:scale-110 transition-all duration-300 rounded-md"
            src={CLOUDINARY_BASE_MEDIA_URL + image}
            alt={name}
          />
          {tag && (
            <span className="absolute text-sm top-2 left-2  text-white bg-G500  rounded-md font-light px-2 py-1">
              {tag}
            </span>
          )}
        </div>
        {isBadged && <img className="absolute top-48 w-12 h-12 " src={badge} alt="Badge Icon" />}

        <div className="flex  flex-col justify-between   h-[200px]">
          <h2 className="font-bold text-md text-left  line-clamp-2 px-4 ">{name}</h2>
          <div className="px-4 flex flex-col relative ">
            <div className="flex flex-col gap-2 ">
              <div className="flex sm:justify-between justify-end  items-center mb-1 w-full ">
                <span className="text-yellow-500 text-md hidden sm:flex">
                  {[...Array(stars)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-500" />
                  ))}
                </span>

                <div className="flex  items-center gap-4">
                  <div className="flex flex-col  items-end">
                    <div className="flex gap-1  items-end">
                      <div className="min-w-5 max-w-5 aspect-square">
                        <Lottie
                          animationData={Pricing}
                          className="w-full h-full"
                          loop={isHovered}
                        />
                      </div>
                      <div className="text-sm text-bold">Starting From</div>
                    </div>

                    <span className="text-primary font-bold text-xl text-B500">
                      {Math.floor(total_price)} $
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between text-gray-600  gap-2">
                <JourneyDetailsPanel type="Type" value={type} icon={Category} hover={isHovered} />
                <JourneyDetailsPanel
                  type="Avg. Hiking Hours"
                  value={avg_hike_hour}
                  icon={Duration}
                  hover={isHovered}
                />
                <JourneyDetailsPanel
                  type="Difficulty"
                  value={difficulty}
                  icon={Difficulty}
                  hover={isHovered}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DayhikeTile;
