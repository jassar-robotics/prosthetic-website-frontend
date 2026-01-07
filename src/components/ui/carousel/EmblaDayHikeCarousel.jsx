import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const EmblaCarousel = ({ children, options = { loop: false, autoplay: false } }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();

    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  return (
    <div className="relative w-full h-full  flex flex-col items-center overflow-hidden rounded-2xl">
      <div className="embla relative w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-2">{children}</div>
        </div>
      </div>

      <div className="flex bottom-0 right-0 justify-between items-end  w-full absolute">
        <div className="flex gap-2 m-2 ">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full ${
                index === selectedIndex ? 'bg-B500' : 'bg-white'
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* <div className="flex bottom-0 right-0 justify-end items-end w-full">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="disabled:bg-N50 bg-B500 cursor-pointer p-1 px-2 hover:bg-B500 rounded-tl-2xl border border-r-0 border-white"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="size-4 text-white" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="disabled:bg-N50 bg-B500 p-1 cursor-pointer px-2 hover:bg-B500 border border-white"
            aria-label="Next slide"
          >
            <FiChevronRight className="size-4 text-white" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default EmblaCarousel;
