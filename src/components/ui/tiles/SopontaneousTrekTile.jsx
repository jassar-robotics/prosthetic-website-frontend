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

import Groups from '@/data/Groups.json';
const JourneyDetailsPanel = ({ icon, value, type, hover }) => {
  return (
    <div className="flex justify-between items-center gap-2   rounded-lg">
      <div className="min-w-6 max-w-6 aspect-square">
        <Lottie animationData={icon} className="w-full h-full" loop={hover} />
      </div>
      <span className="text-left">
        <span className="text-xs flex">{type}</span>
        <strong className="block text-xs">{value}</strong>
      </span>
    </div>
  );
};

const TrekTile = ({ data, type = 'Trek' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    slug,
    name,
    total_price,
    image,
    difficulty,
    duration,
    tag,
    isBadged,

    stars,
    max_group_range,
  } = data;
  return (
    <Link
      aria-label={`Trek - ${name}`}
      to={`/trek/${slug}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative border bg-white  cursor-pointer group flex h-[460px] flex-col justify-between gap-5 rounded-lg overflow-hidden hover:shadow-lg shadow-md m-2 md:m-0  p-5 transition-all duration-500   border-N100 5 border-0.5"
    >
      <div className="flex flex-col gap-2 justify-start">
        <div className="relative overflow-hidden rounded-md">
          <ImageSkeleton
            className="w-full h-64 aspect-video object-cover object-center group-hover:scale-110 rounded-md transition-all duration-300"
            src={CLOUDINARY_BASE_MEDIA_URL + image}
            alt={name}
          />
          {tag && (
            <span className="absolute top-2 left-2 bg-G500 text-white rounded-md font-light px-2 py-1 text-xs">
              {tag}
            </span>
          )}

          {max_group_range > 1 && (
            <div className="min-w-8 max-w-8 aspect-square absolute top-2 right-2  h-6 w-6 z-10  rounded p-1">
              <Lottie animationData={Groups} className="w-full h-full" loop={isHovered} />
            </div>
          )}
        </div>
        {isBadged && (
          <img className="absolute top-36 w-12 h-12 z-10 " src={badge} alt="Badge Icon" />
        )}
        <h2 className="font-bold text-base text-left line-clamp-2">{name}</h2>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-1 w-full">
          <span className="text-yellow-500 text-md flex">
            {[...Array(stars)].map((_, index) => (
              <FaStar key={index} className="text-yellow-500" />
            ))}
          </span>
          <div className="flex flex-col items-end">
            <div className="flex gap-1  items-center">
              <div className="min-w-4 max-w-4 aspect-square">
                <Lottie animationData={Pricing} className="w-full h-full" loop={isHovered} />
              </div>
              <div className="text-xs text-bold">Price Starting From</div>
            </div>
            <span className="text-primary font-bold text-md">
                {Math.floor(total_price) === 0 ? "Free" : `USD ${Math.floor(total_price)}`}
              </span>
          </div>
        </div>
        <div className="flex justify-between text-gray-600  gap-2">
          <JourneyDetailsPanel type="Type" value={type} icon={Category} hover={isHovered} />
          <JourneyDetailsPanel type="Duration" value={duration} icon={Duration} hover={isHovered} />
          <JourneyDetailsPanel
            type="Difficulty"
            value={difficulty}
            icon={Difficulty}
            hover={isHovered}
          />
        </div>
      </div>
    </Link>
  );
};

export default TrekTile;
