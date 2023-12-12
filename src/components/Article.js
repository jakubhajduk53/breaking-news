import classNames from "classnames";

function Article({
  className,
  onClick,
  description,
  title,
  source,
  isPagination,
}) {
  const articleClasses = classNames(
    "w-full h-full flex flex-col rounded-xl text-center text-lg sm:text-2xl bg-persian-red hover:bg-persian-red/90 transition-colors cursor-pointer ",
    className
  );

  return (
    <div className={articleClasses} onClick={onClick}>
      <p className="text-linen truncate">{source}</p>
      <p className={isPagination ? "text-linen/70" : "text-linen/70 truncate"}>
        {title}
      </p>
      <p className="text-sm sm:text-xl pl-5 pr-5 truncate xl:whitespace-normal ">
        {description}
      </p>
    </div>
  );
}

export default Article;
