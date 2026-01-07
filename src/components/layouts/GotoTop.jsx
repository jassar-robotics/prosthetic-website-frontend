import { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const GotoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const toggleVisibility = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <button
        onClick={scrollToTop}
        className={`${isVisible ? 'block' : 'hidden'} z-50 fixed bottom-5 right-5 p-3 bg-B300 text-white rounded-full shadow-lg transition-opacity 
                    }`}
        aria-label="Go to top"
      >
        <AiOutlineArrowUp size={24} />
      </button>
    </>
  );
};

export default GotoTop;
