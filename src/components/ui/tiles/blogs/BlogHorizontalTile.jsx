import ImageSkeleton from '@/components/ui/skeleton/ImageSkeleton.jsx';
import { CLOUDINARY_BASE_MEDIA_URL } from '@/config/baseurl.js';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { format } from 'date-fns';
import { AiFillEdit } from 'react-icons/ai';
import { IoMdShare } from 'react-icons/io';
import { MdDateRange, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
const BlogHorizontalTile = ({ blog }) => {
  const { heading, subheading, author_name, created_at, image, category_name, slug, location } =
    blog;

  const { copy } = useCopyToClipboard();

  return (
    <div className="sm:h-48 p-2 gap-2 flex-col sm:flex-row max-w-full flex rounded-xl overflow-hidden mb-4 shadow-md bg-white transition-all duration-300 hover:shadow-lg select-none">
      <div className="relative sm:w-1/2 ">
        <>
          <ImageSkeleton
            src={CLOUDINARY_BASE_MEDIA_URL + image}
            className="w-full h-48 sm:h-full object-cover rounded-lg"
            alt={heading}
          />
        </>
        {category_name ? (
          <Link
            aria-label="Blogs"
            to="/blogs"
            className="flex items-center cursor-pointer absolute  left-1 bottom-1 bg-white/90 hover:bg-white text-N300  px-2 p-1 rounded-md text-sm"
          >
            {category_name}
          </Link>
        ) : (
          ''
        )}

        <div
          className="absolute bg-G400 hover:bg-white hover:text-G400  text-white text-xs flex items-center gap-2 cursor-pointer  top-1 right-1 p-1 px-2 rounded-md"
          onClick={() => copy('https://PROJECT_NAME.com/blog/' + slug)}
        >
          <IoMdShare className="size-3.5" />
          Share
        </div>
      </div>
      <div className="flex flex-col gap-4 py-2 sm:w-1/2">
        <div className="flex flex-wrap justify-start gap-2 text-gray-600">
          {author_name && (
            <div className="flex items-center gap-1">
              <AiFillEdit />
              <span className="text-sm">{author_name}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <MdDateRange />
            <span className="text-sm">
              {' '}
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
        <div className="flex justify-start flex-col gap-1">
          <Link aria-label={`Blog - ${heading}`} to={`/blog/${slug}`}>
            <div className="font-bold text-md line-clamp-2 text-N900 text-left">{heading}</div>
          </Link>
          <div className="text-base text-N500 text-start line-clamp-1">{subheading}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogHorizontalTile;
