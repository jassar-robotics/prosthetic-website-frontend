import Home from '@/data/Home.json';
import Lottie from 'lottie-react';
import { useState } from 'react';
import { GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
function BreadCrumbs({
  name = null,
  type = null,
  category = null,
  sub_category = null,
  region_name = null,
  region_slug = null,
  location_name = null,
  location_slug = null,
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex gap-1 font-light   items-center text-sm shrink-0 overflow-hidden  w-full text-left">
      <Link
        aria-label="Home Page"
        className="flex items-center shrink-0"
        to="/"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="min-w-5 max-w-5 aspect-square">
          <Lottie animationData={Home} className="w-full h-full" loop={isHovered} />
        </div>
      </Link>

      {type && (
        <>
          <GoChevronRight className="size-5 shrink-0" />
          <div className="shrink-0">{type}</div>
        </>
      )}

      {category && (
        <>
        
          <GoChevronRight className="size-5 shrink-0" />
           <Link
            aria-label={`Region - ${region_slug}`}
            to={`/tours?q=${category?.replace(/ /g, "+")}`}
            className="hover:underline shrink-0"
          >
            {category}</Link>
        </>
      )}

      {sub_category && (
        <>
          <GoChevronRight className="size-5 shrink-0" />
          <Link
            aria-label={`Region - ${region_slug}`}
           to={`/tours?q=${sub_category?.replace(/ /g, "+")}`}
            className="hover:underline shrink-0"
          >
            {sub_category}
          </Link>
        </>
      )}

      {region_name && (
        <>
          <GoChevronRight className="size-5 shrink-0" />
          <Link
            aria-label={`Region - ${region_slug}`}
            to={`/region/${region_slug}`}
            className="hover:underline shrink-0"
          >
            {region_name}
          </Link>
        </>
      )}

      {location_name && (
        <>
          <GoChevronRight className="size-5 shrink-0" />
          <Link
            aria-label={`Region - ${location_slug}`}
            to={`/location/${location_slug}`}
            className="hover:underline shrink-0"
          >
            {location_name}
          </Link>
        </>
      )}

      {name && (
        <>
          <GoChevronRight className="size-5 shrink-0" />
          <div className="line-clamp-1">{name}</div>
        </>
      )}
    </div>
  );
}

export default BreadCrumbs;
