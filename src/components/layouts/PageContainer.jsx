function Container({ children }) {
  return (
    <div className="relative w-full flex flex-col px-5 md:px-[4rem] max-w-[100em] mx-auto mt-5 mb-20 gap-5">
      {children}
    </div>
  );
}

export default Container;
