function FullArticle({ className, onClick, article }) {
  console.log(article);
  return (
    <div className="w-full h-full grid grid-rows-5 grid-cols-4 justify-items-center place-content-center p-2 gap-2">
      <div className="w-full h-full flex flex-col row-span-4 col-span-4 bg-persian-red rounded-xl text-center text-2xl">
        <p className="text-3xl text-linen">{article.source.name}</p>
        <p className=" text-2xl">
          {article?.title}
          <span className="text-base text-linen"> by {article?.author}</span>
        </p>
        <p className=" text-xl">{article?.description}</p>
        <img
          src={article.urlToImage}
          className="aspect-video w-96 self-center mt-5"
        />
        <p className="flex flex-col w-[70%] self-center text-lg outline outline-raisin-black rounded-xl ml-5 mr-5 mt-5">
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
        className="w-full h-full flex items-center justify-center row-span-1 col-span-4 bg-persian-red/90 hover:bg-persian-red/80 rounded-xl text-center text-2xl cursor-pointer"
        onClick={onClick}
      >
        Go Back
      </div>
    </div>
  );
}

export default FullArticle;
