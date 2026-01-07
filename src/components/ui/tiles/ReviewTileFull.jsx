import ImageSkeleton from '@/components/ui/skeleton/ImageSkeleton.jsx';
import { FaStar } from 'react-icons/fa';
function ReviewTile({ star, name, reviewDetail, profile, date }) {
  return (
    <div
      className="transition-all duration-300 bg-white cursor-pointer relative flex flex- shadow rounded-3xl hover:bg-B50 gap-2   box-border
       p-5 justify-start items-start"
    >
      <div className="flex flex-col  w-48 justify-center items-center">
        <ImageSkeleton
          src={profile}
          alt={name}
          className="w-20 h-20  rounded-full  object-cover z-0 "
        />
        <div className="text-md font-semibold text-left">{name}</div>
        <div className="text-base text-left text-N500">{date}</div>
      </div>
      <div className="flex flex-col  gap-4 w-full">
        <div className="flex gap-1">
          {Array.from({ length: star || 0 }).map((_, index) => (
            <FaStar key={index} className="text-yellow-300" size={20} />
          ))}
        </div>

        <div className="text-sm leading-relaxed text-left">{reviewDetail}</div>
      </div>
    </div>
  );
}

export default ReviewTile;
