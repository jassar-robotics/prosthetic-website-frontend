import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop({ offset = 0 }) {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    };

    requestAnimationFrame(scrollToTop);
    const timer = setTimeout(scrollToTop, 50);

    return () => clearTimeout(timer);
  }, [pathname, search, offset]);

  return null;
}
