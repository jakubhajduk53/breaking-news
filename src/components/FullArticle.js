function FullArticle({ value, onClick }) {
  return (
    <div className="w-full h-full grid grid-rows-5 grid-cols-4 justify-items-center place-content-center p-2 gap-2">
      <div className="w-full h-full row-span-4 col-span-4 bg-persian-red rounded-xl text-center text-2xl">
        <p className=" text-2xl">{value.title}</p>
        <p className=" text-xl">{value.subtitle}</p>
        <p className=" text-lg">{value.value}</p>
      </div>
      <div
        className="w-full h-full row-span-1 col-span-4 bg-verdigris hover:bg-verdigris/90 rounded-xl text-center text-2xl cursor-pointer"
        onClick={onClick}
      >
        Go Back
      </div>
    </div>
  );
}

export default FullArticle;
