import ImageSkeleton from '@/components/ui/skeleton/ImageSkeleton.jsx';
import { FaStar } from 'react-icons/fa';
import { format } from 'date-fns';

function ReviewTile({ star, name, reviewDetail, profile, date, onClickPopUp }) {
  return (
    <>
      <div className="w-full p-2">
        <div
          onClick={onClickPopUp}
          className="transition-all duration-300 bg-white cursor-pointer h-full hover:shadow-md relative flex flex-col shadow rounded-3xl hover:bg-B50 gap-5 box-border p-5 justify-start items-start"
        >
          <div className="flex gap-3 justify-center items-center">
            <ImageSkeleton
              src={profile}
              alt={name}
              className="w-12 h-12 rounded-full object-cover z-0"
            />
            <div className="flex flex-col">
              <div className="text-md font-semibold text-left">{name}</div>
              <div className="text-base text-left text-N500">
                           {date ? format(new Date(date), 'MMMM d, yyyy') : ''}
                         </div>
            </div>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: star || 0 }).map((_, index) => (
              <FaStar key={index} className="text-yellow-300" size={20} />
            ))}
          </div>
          <hr className="border border-B200 w-full" />
          <div className="text-sm leading-relaxed line-clamp-4 text-left">{reviewDetail}</div>
        </div>
      </div>
    </>
  );
}

export default ReviewTile;
