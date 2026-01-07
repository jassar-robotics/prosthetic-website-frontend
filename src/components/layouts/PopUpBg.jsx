export default function PopUpBg({ isOpen, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed overflow-y-auto pb-20 top-0 md:left-[12vw] w-full left-0 md:w-[88vw] min-h-screen h-full z-30 bg-white/60 backdrop-blur-md py-5 px-2 transition-all duration-300 ease-in-out flex flex-col justify-start items-center gap-5">
      {children}
    </div>
  );
}
