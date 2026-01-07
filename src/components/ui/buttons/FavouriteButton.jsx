import Liked from '@/data/Liked.json';
import Lottie from 'lottie-react';
import { useEffect, useRef, useState } from 'react';
import { FaHeart } from 'react-icons/fa6';

const FavoriteIcon = ({ isFavorite }) => {
  const lottieRef = useRef();
  const [showStaticIcon, setShowStaticIcon] = useState(false);

  useEffect(() => {
    if (!lottieRef.current) return;

    const totalFrames = lottieRef.current.getDuration(true);

    if (isFavorite) {
      setShowStaticIcon(false); // Show Lottie first
      lottieRef.current.playSegments([0, totalFrames], true);
    } else {
      setShowStaticIcon(false);
      lottieRef.current.playSegments([totalFrames, 0], true);
    }

    // Set a timeout to show static icon after animation duration
    const timeout = setTimeout(() => {
      if (isFavorite) {
        setShowStaticIcon(true);
      }
    }, 700); // Adjust based on your animation length

    return () => clearTimeout(timeout);
  }, [isFavorite]);

  return (
    <div className="min-w-16 max-w-16 aspect-square text-red-500 flex items-center justify-center">
      {showStaticIcon && isFavorite ? (
        <FaHeart className="size-5" />
      ) : (
        <Lottie
          lottieRef={lottieRef}
          animationData={Liked}
          loop={false}
          autoplay={false}
          className="w-full h-full"
        />
      )}
    </div>
  );
};

export default FavoriteIcon;
