import CreateTrip from '@/data/CreateTrip.json';
import Lottie from 'lottie-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function CustomCreateButton() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      to="/create"
      aria-label="Create Your Trip"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className=" group flex gap-2 items-center justify-center w-48 text-sm  px-2 bg-B500 text-white shadow-lg rounded-md text-B500 hover:bg-transparent border border-transparent hover:border-B500 hover:text-B500  hover:shadow-none transition-colors duration-500"
      onClick={() => {
        setCompanyDropDown(false);
      }}
    >
      <p className="text-sm"> Create Your Trip</p>
      <div className="min-w-10 max-w-10 aspect-square ">
        <Lottie animationData={CreateTrip} className="w-full h-full" loop={isHovered} />
      </div>
    </Link>
  );
}

export default CustomCreateButton;
