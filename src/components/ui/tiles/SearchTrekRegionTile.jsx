import { CLOUDINARY_BASE_MEDIA_URL } from '@/config/baseurl.js';
import { Link } from 'react-router-dom';
function SearchTrekRegionTile({ name, image, slug, type, type_slug, difficulty, total_price }) {
  return (
    <Link
      aria-label={`Category - ${type_slug}`}
      to={`/${type_slug}/${slug}`}
      className=" justify-between md:gap-16 gap-4  p-2 py-4  w-full flex md:flex-row flex-col  rounded-md bg-white/50 hover:bg-B100 hover:shadow-sm"
    >
      <div className="flex gap-2">
        <img
          src={CLOUDINARY_BASE_MEDIA_URL + image}
          className="object-cover w-34 rounded-md aspect-square"
          width={50}
          height={50}
          alt=""
        />
        <div className="flex flex-col gap-2 justify-start">
          <div className="text-sm text-left text-N900 font-semibold">{name}</div>
          <div className="text-xs text-left text-N500">
            Price Starting From{' '}
            <span className="text-B500 font-semibold">
                    {Number(total_price) === 0 ? "Free" : `USD ${total_price}`}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-4 w-52">
        <div className="flex flex-col gap-2 justify-start">
          <div className="text-xs text-left text-N500">Type</div>
          <div className="text-xs text-left text-N900 font-semibold">{type}</div>
        </div>

        {/* 
            <div className="flex flex-col gap-2 justify-start">
              <div className="text-xs text-left text-N500">Duration</div>
              <div className="text-xs text-left text-N900 font-semibold">{type}</div>
            </div> */}

        <div className="flex flex-col gap-2 justify-start">
          <div className="text-xs text-left text-N500">Difficulty</div>
          <div className="text-xs text-left text-N900 font-semibold">{difficulty}</div>
        </div>
      </div>
    </Link>
  );
}

export default SearchTrekRegionTile;
