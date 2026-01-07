import ImageSkeleton from '@/components/ui/skeleton/ImageSkeleton.jsx';
import { format } from 'date-fns';
import { AiFillEdit } from 'react-icons/ai';
import { IoMdShare } from 'react-icons/io';
import { MdDateRange, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { CLOUDINARY_BASE_MEDIA_URL } from '@/config/baseurl.js';

const NormalBlogTile = ({ blog, onShare }) => {
  const {
    id,
    heading,
    subheading,
    author,
    created_at,
    image,
    category_name,
    slug,
    location,
  } = blog;

  const isLoading = Object.keys(blog).length === 0;

  return (
    <div className="relative flex flex-col justify-start gap-3 p-2 md:p-5 rounded-xl shadow-md bg-white transition-all duration-300 hover:shadow-lg select-none">
      <div className="relative h-64 rounded-lg overflow-hidden">
        {isLoading ? (
          <ImageSkeleton />
        ) : (
          <div className="relative w-full h-full group overflow-hidden">
            {/* Share Button */}
            <div
              className="absolute bg-G400 rounded-lg z-10 hover:bg-white hover:text-G400 text-white text-xs flex items-center gap-2 cursor-pointer top-1 right-1 p-1 px-2"
              onClick={(e) => {
                e.stopPropagation();
                onShare?.(slug);
              }}
            >
              <IoMdShare className="size-3.5" />
              Share
            </div>

            <ImageSkeleton
              src={CLOUDINARY_BASE_MEDIA_URL + image}
              alt={heading}
              className="object-cover w-full h-full rounded-md group-hover:scale-105 transition-all duration-500 ease-in-out"
            />

            {category_name && (
              <Link
                aria-label="Blogs"
                to="/blogs"
                className="flex z-10 items-center cursor-pointer absolute left-1 bottom-1 bg-white/90 hover:bg-white text-N300 px-2 p-1 rounded-md text-sm"
              >
                {category_name}
              </Link>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <Link aria-label={`Blog - ${heading}`} to={`/blog/${slug}`}>
          <div className="font-bold text-md text-N900 line-clamp-1">
            {heading}
          </div>
        </Link>
        <div className="text-base text-N500 line-clamp-1">
          {subheading}
        </div>
      </div>

      <div className="flex items-center gap-2 text-gray-600">
        {author && (
          <div className="flex items-center gap-1">
            <AiFillEdit />
            <span className="text-sm">{author}</span>
          </div>
        )}

        <div className="flex items-center gap-1">
          <MdDateRange />
          <span className="text-sm">
            {format(new Date(created_at || Date.now()), 'MMMM d, yyyy')}
          </span>
        </div>

        {location && (
          <div className="flex items-center gap-1">
            <MdLocationOn />
            <span className="text-sm">{location}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NormalBlogTile;