import { Link } from 'react-router-dom';

import PageConatiner from '@/components/layouts/PageContainer.jsx';
import NotFoundLottie from '@/data/404.json';
import Lottie from 'lottie-react';

import SEOMeta from '@/components/layouts/SEOMeta.jsx';

function NotFound() {
  return (
    <>
      <SEOMeta
        title="Page Not Found | Hello Trekkers"
        description="Oops! The page you are looking for is missing. Browse our treks and tours to find your next adventure."
        canonical="https://PROJECT_NAME.com"
      />
      <PageConatiner>
        <div className="flex   flex-col  w-full items-center space-y-4 mt-10 gap-2">
          <div className="min-w-64 max-w-64 aspect-square">
            <Lottie animationData={NotFoundLottie} className="w-full h-full" loop={true} />
          </div>

          <div className="font-liches">are you lost?!</div>
          <Link
            to="/"
            className="text-G300 text-sm text-white font-medium rounded-md hover:bg-transparent hover:text-B500 border border-B500 transition-colors duration-500 py-2 px-3 bg-B500"
          >
            Home Page
          </Link>
        </div>
      </PageConatiner>
    </>
  );
}

export default NotFound;
