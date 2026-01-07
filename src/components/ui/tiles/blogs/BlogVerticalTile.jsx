import { CLOUDINARY_BASE_MEDIA_URL } from '@/config/baseurl.js';
import { format } from 'date-fns';
import { AiFillEdit } from 'react-icons/ai';
import { IoMdShare } from 'react-icons/io';
import { MdDateRange, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

import ImageSkeleton from '@/components/ui/skeleton/ImageSkeleton.jsx';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

import { useQuery } from '@tanstack/react-query';

import currentBlogOptions from '@/queryOptions/currentBlogOptions.js';

const BlogVerticalTile = () => {
  const { data } = useQuery(currentBlogOptions());

  const { copy } = useCopyToClipboard();
  return (
    <div className="relative flex flex-col gap-3  p-2 md:p-5 max-w-full m-3 rounded-xl shadow-md bg-white transition-all duration-300 hover:shadow-lg select-none">
      <div className="relative h-full w-full">
        {/* <div className="w-full md:h-96 h-48"> */}
        <ImageSkeleton
          src={CLOUDINARY_BASE_MEDIA_URL + data?.image}
          alt={data?.heading}
          className="object-cover rounded-lg w-full md:h-96 h-48"
        />
        {/* </div> */}
        {data?.category_name ? (
          <Link
            aria-label="Blogs"
            to="/blogs"
            className="flex items-center cursor-pointer absolute  left-1 bottom-1 bg-white/90 hover:bg-white text-N300    px-2 p-1 rounded-md text-sm"
          >
            {data?.category_name}
          </Link>
        ) : (
          ''
        )}
        <div
          className="absolute bg-G400 hover:bg-white hover:text-G400  text-white text-xs flex items-center gap-2 cursor-pointer  top-1 right-1 p-1 px-2 rounded-md"
          onClick={() => copy('https://PROJECT_NAME.com/blog/' + data?.slug)}
        >
          <IoMdShare className="size-3.5" />
          Share
        </div>
      </div>
      <div className="flex justify-start flex-col gap-1">
        <Link aria-label={`Blog - ${data?.heading}`} to={`/blog/${data?.slug}`}>
          <div className="font-bold text-md text-N900 text-left">{data?.heading}</div>
        </Link>
        <div className="text-base text-N500 text-start line-clamp-2">{data?.subheading}</div>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
        {data?.author_name && (
          <div className="flex items-center gap-1">
            <AiFillEdit />
            <span className="text-sm">{data?.author_name}</span>
          </div>
        )}
        <div className="flex items-center gap-1">
          <MdDateRange />
          <span className="text-sm">
            {' '}
            {format(new Date(data?.created_at || Date.now()), 'MMMM d, yyyy')}
          </span>
        </div>

        {data?.location && (
          <div className="flex items-center gap-1">
            <MdLocationOn />
            <span className="text-sm">{data?.location}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogVerticalTile;
