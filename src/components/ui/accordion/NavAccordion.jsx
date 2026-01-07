import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const FAQ = ({ data }) => {
  const [isOpened, setIsOpened] = useState(false);
  const arrowSVG = !isOpened ? (
    <FaChevronDown className="h-fit w-5 self-center" />
  ) : (
    <FaChevronUp className="h-fit w-5 self-center" />
  );

  return (
    <>
      <div className="cursor-pointer w-full md:w-[60%] mx-auto select-none">
        <div
          className={`p-4 rounded-md shadow-md transition duration-300 ease-in-out `}
          onClick={() => setIsOpened(!isOpened)}
        >
          <div className="flex justify-between items-center">
            <span className="font-semibold">{data?.name}</span>
            {arrowSVG}
          </div>
        </div>

        {isOpened && (
          <div className=" p-4 rounded-md shadow-md flex flex-col gap-2">
            {data?.map((item, index) => (
              <Link
                aria-label={item?.id + index}
                key={index}
                to={`/${item?.link}/${item?.id}`}
                className="p-2 hover:underline underline-offset-1"
              >
                {item?.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FAQ;
