import BG from '@/assets/bg/PreferenceBG.webp';
import { Link } from 'react-router-dom';

function PreferenceTile({ img, name, slug }) {
  return (
    <Link
      aria-label={name}
      to={slug}
      className="group relative w-full overflow-hidden md:max-w-[250px] aspect-square cursor-pointer shadow-lg md:shadow-none hover:shadow-lg transition-all duration-300 ease-in-out rounded-md flex flex-col gap-3 bg-white"
    >
      <img
        className="absolute w-full h-full object-cover z-0 rounded-md"
        src={BG}
        alt="Background"
      />

      <div className="p-2 z-10 rounded-md relative flex flex-col h-full">
        <p className="text-center text-base font-bold">{name}</p>
        <img
          src={img}
          alt={`Image of ${name}`}
          className="w-full aspect-square rounded-md group-hover:scale-105 transition-all duration-500 ease-in-out"
        />
      </div>
    </Link>
  );
}

export default PreferenceTile;
