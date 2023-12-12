function FullArticle({ onClick, article }) {
  return (
    <div className="w-full h-full grid grid-rows-5 grid-cols-4 gap-2 justify-items-center place-content-center p-2 overflow-y-scroll sm:overflow-hidden">
      <div className="w-full h-full flex flex-col row-span-4 col-span-4 text-center bg-persian-red rounded-xl">
        <p className="text-xl sm:text-3xl text-linen">{article.source.name}</p>
        <p className=" sm:text-2xl">
          {article?.title}
          <span className="text-base text-linen"> by {article?.author}</span>
        </p>
        <p className="text-sm sm:text-xl">{article?.description}</p>
        <img
          src={article.urlToImage}
          className="aspect-video w-48 sm:w-96 self-center mt-5 border-2"
        />
        <p className="flex flex-col sm:w-[70%] self-center text-sm sm:text-lg outline outline-raisin-black rounded-xl sm:ml-5 sm:mr-5 mt-2 sm:mt-5">
          {article?.content}
          <span
            className="text-linen underline cursor-pointer"
            onClick={() => {
              window.open(article.url, "_blank");
            }}
          >
            View full article
          </span>
        </p>
      </div>
      <div
        className="w-full h-full flex items-center justify-center row-span-1 col-span-4 bg-persian-red/90 hover:bg-persian-red/80 rounded-xl text-center text-lg sm:text-2xl cursor-pointer"
        onClick={onClick}
      >
        Go Back
      </div>
    </div>
  );
}

export default FullArticle;
