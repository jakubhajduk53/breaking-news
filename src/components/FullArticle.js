function FullArticle({ value, onClick }) {
  return (
    <div className="w-full h-full grid grid-rows-5 grid-cols-4 justify-items-center place-content-center p-2 gap-2">
      <div className="w-full h-full flex flex-col row-span-4 col-span-4 bg-persian-red rounded-xl text-center text-2xl">
        <p className=" text-2xl">{value.title}</p>
        <p className=" text-xl">{value.subtitle}</p>
        <p className=" w-[70%] self-center text-lg shadow-xl ml-5 mr-5 rounded-xl mt-5 ">
          {value.value}
        </p>
      </div>
      <div
        className="w-full h-full flex items-center justify-center row-span-1 col-span-4 bg-verdigris hover:bg-verdigris/90 rounded-xl text-center text-2xl cursor-pointer"
        onClick={onClick}
      >
        Go Back
      </div>
    </div>
  );
}

export default FullArticle;
