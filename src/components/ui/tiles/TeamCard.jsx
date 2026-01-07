import ImageSkeleton from '@/components/ui/skeleton/ImageSkeleton.jsx';
const TeamCard = ({ name, title, imgUrl }) => {
  return (
    <>
      <div className="hover:bg-G100 p-4 hover:shadow-md hover:scale-105 transition-all duration-500 rounded-md flex flex-col gap-1 items-center justify-center cursor-pointer">
        <div className="relative rounded-lg overflow-hidden">
          <div className="bg-white shadow-lg overflow-hidden aspect-square">
            <ImageSkeleton
              src={imgUrl}
              alt="Profile"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          {/* <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/50 to-transparent"></div> */}
        </div>

        <div className="text-left w-full flex flex-col ">
          <div className="text-xl font-reenie  text-gray-900 leading-tight">{name}</div>
          <div className="text-N500  font-medium">{title}</div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
