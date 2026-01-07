import DayHikeTile from '@/components/ui/tiles/DayHikeTile.jsx';
import SopontaneousTrekTile from '@/components/ui/tiles/SopontaneousTrekTile.jsx';
import TourTile from '@/components/ui/tiles/TourTile.jsx';
import TrekTile from '@/components/ui/tiles/TrekTile.jsx';
import BlogNormalTile from '@/components/ui/tiles/blogs/NormalBlogTile.jsx';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const TrekCarousel = ({ data = [], type = 'trek' }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (!data?.length) return null;

  return (
    <div className="relative">
      <button
        ref={prevRef}
        className="absolute left-0 z-10 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-2 shadow rounded-full"
      >
        <ArrowLeft size={20} />
      </button>
      <button
        ref={nextRef}
        className="absolute right-0 z-10 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-2 shadow rounded-full"
      >
        <ArrowRight size={20} />
      </button>

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={false}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className=" relative"
      >
        {type == 'trek' &&
          data?.map((item, index) => (
            <SwiperSlide key={index} className="h-full relative">
              <TrekTile data={item} />
            </SwiperSlide>
          ))}

        {type == 'spontaneoustrek' &&
          data?.map((item, index) => (
            <SwiperSlide key={index} className="h-full relative">
              <SopontaneousTrekTile data={item} />
            </SwiperSlide>
          ))}

        {type == 'tour' &&
          data?.map((item, index) => (
            <SwiperSlide key={index}>
              <TourTile data={item} />
            </SwiperSlide>
          ))}

        {type == 'dayhike' &&
          data?.map((item, index) => (
            <SwiperSlide key={index}>
              <DayHikeTile data={item} />
            </SwiperSlide>
          ))}

        {type == 'blog' &&
          data?.map((item, index) => (
            <SwiperSlide key={index}>
              <BlogNormalTile blog={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TrekCarousel;
