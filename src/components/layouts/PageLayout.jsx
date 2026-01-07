import { useState } from 'react';

import Footer from '@/components/layouts/Footer.jsx';
import Header from '@/components/layouts/Header.jsx';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';

import ScrollToTop from '@/router/ScrollToTop.jsx';
export default function PageLayout() {
  const [activeMenu, setActiveMenu] = useState({});

  const location = useLocation();

  const scrollStickyRoutes = ['/trek'];
  const shouldUseAnimatedSticky = scrollStickyRoutes.some((path) =>
    location.pathname.startsWith(path),
  );
  const { scrollY } = useScroll();
  const [hideHeader, setHideHeader] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 990) {
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }

  });

  return (
    <>
      <ScrollToTop offset={0} />
      <div className="flex relative w-full flex-col">
        {shouldUseAnimatedSticky ? (
          <motion.nav
            variants={{
              visible: { y: 0 },
              hidden: { y: '-100%' },
            }}
            animate={hideHeader ? 'hidden' : 'visible'}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="sticky top-0 z-50 md:hidden"
          >
            <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          </motion.nav>
        ) : (
          <div className="sticky md:hidden">
            <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
          </div>
        )}

        <div className=" md:block hidden">
          <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </div>

        <main className="flex-1  relative bg-gray-100">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
