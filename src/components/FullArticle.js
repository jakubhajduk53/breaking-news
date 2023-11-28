function FullArticle({ value, onClick }) {
  return (
    <div className="w-full h-full grid grid-rows-5 grid-cols-4 justify-items-center place-content-center p-2 gap-2">
      <div className="w-full h-full flex flex-col row-span-4 col-span-4 bg-persian-red rounded-xl text-center text-2xl">
        <p className=" text-2xl">{value.title}</p>
        <p className=" text-xl">{value.subtitle}</p>
        <p className=" w-[70%] self-center text-lg shadow-xl ml-5 mr-5 rounded-xl mt-5 bg-red-500/25">
          {value.value}
        </p>
      </div>
      <div
        className="w-full h-full flex items-center justify-center row-span-1 col-span-4 bg-persian-red/90 hover:bg-persian-red/80 rounded-xl text-center text-2xl cursor-pointer"
        onClick={onClick}
      >
        Go Back
      </div>
      <div className="text-7xl absolute self-center text-verdigris animate-fade-out">
        {value.title}
      </div>
    </div>
  );
}

export default FullArticle;
