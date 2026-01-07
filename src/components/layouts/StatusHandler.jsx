import Loader from '@/data/Loader.json';
import NotFoundLottie from '@/data/NotFound.json';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';

export default function StatusHandler({ isLoading, isError, children }) {
  if (isLoading) {
    return (
      <div className="w-full flex flex-col justify-center items-center mt-10">
        <div className="min-w-80 max-w-80 aspect-square">
          <Lottie animationData={Loader} className="w-full h-full" loop={true} />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full flex flex-col justify-center items-center mt-10">
        <div className="min-w-80 max-w-80 aspect-square">
          <Lottie animationData={NotFoundLottie} className="w-full h-full" loop={true} />
        </div>
        <div className="font-liches text-2xl">No Data found!</div>
        <Link
          to="/"
          className="text-G300 text-white font-medium rounded-md hover:bg-transparent hover:text-B500 border border-B500 transition-colors duration-500 py-2 px-3 bg-B500"
        >
          Home Page
        </Link>
      </div>
    );
  }

  return <>{children}</>;
}
