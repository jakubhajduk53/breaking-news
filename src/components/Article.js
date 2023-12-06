import classNames from "classnames";

function Article({ className, onClick, description, title, source }) {
  const articleClasses = classNames(
    "w-full h-full flex flex-col bg-persian-red rounded-xl text-center hover:bg-persian-red/90 transition-colors cursor-pointer text-2xl ",
    className
  );

  return (
    <div className={articleClasses} onClick={onClick}>
      <p className="text-linen truncate">{source}</p>
      <p className="text-linen/70 truncate">{title}</p>
      <p className="text-xl pl-5 pr-5 truncate">{description}</p>
    </div>
  );
}

export default Article;
