import classNames from "classnames";

function Article({ className, onClick, description, title }) {
  const articleClasses = classNames(
    "w-full h-full flex flex-col bg-persian-red rounded-xl text-center hover:bg-persian-red/90 transition-colors cursor-pointer",
    className
  );

  return (
    <div className={articleClasses} onClick={onClick}>
      <p className=" text-2xl">{title}</p>
      <p className=" text-xl pl-5 pr-5">{description}</p>
    </div>
  );
}

export default Article;
