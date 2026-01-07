import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const EmblaCarousel = ({
  children,
  link = '',
  options = { loop: false, autoplay: false, speed: 100 },
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    emblaApi.on('select', onSelect);
    onSelect();

    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <div className=" relative w-full flex flex-col gap-3 items-center">
      <div className="embla relative w-full ">
        <div className="overflow-hidden " ref={emblaRef}>
          <div className="flex gap-2 pb-2">{children}</div>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        {link && (
          <Link
            aria-label="Blogs"
            to="/blogs"
            className="flex gap-1 items-center justify-center text-black ml-4 transition-colors duration-500 hover:text-B700 cursor-pointer mt-2 underline underline-offset-2"
          >
            <div className="text-black"> See All</div>
            <GoArrowUpRight className="text-md" />
          </Link>
        )}
        <div></div>
        <div className="flex gap-4 self-end px-2">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="disabled:bg-N50  bg-G300 p-1 hover:bg-G400 rounded-md"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="size-6 text-white" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="disabled:bg-N50  bg-G300 p-1 hover:bg-G400 rounded-md"
            aria-label="Previous slide"
          >
            <FiChevronRight className="size-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
