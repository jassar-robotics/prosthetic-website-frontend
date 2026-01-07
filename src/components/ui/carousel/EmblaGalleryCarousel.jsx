import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { forwardRef, useCallback, useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const EmblaGalleryCarousel = forwardRef(({ children, options = {}, startIndex = 0 }, ref) => {
  const autoplayPlugin = options.autoplay
    ? [Autoplay(typeof options.autoplay === 'object' ? options.autoplay : {})]
    : [];

  const [emblaRef, emblaApi] = useEmblaCarousel(options, autoplayPlugin);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    // Scroll to the desired slide on mount
    emblaApi.scrollTo(startIndex, true);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, startIndex]);

  return (
    <div
      className="relative flex flex-row justify-center h-full items-center gap-2"
      ref={ref}
    >
      <div className="embla relative w-full h-fit">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex gap-2 h-full">{children}</div>
        </div>
      </div>

      <div className="absolute justify-between flex z-50 w-full h-fit">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="p-1 group hover:bg-G500 rounded-full"
          aria-label="Previous slide"
        >
          <FiChevronLeft className="size-6 text-white group-disabled:text-white/50" />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="p-1 group hover:bg-G500 rounded-full"
          aria-label="Next slide"
        >
          <FiChevronRight className="size-6 text-white group-disabled:text-white/50" />
        </button>
      </div>
    </div>
  );
});

export default EmblaGalleryCarousel;
