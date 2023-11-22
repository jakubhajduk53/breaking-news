import classNames from "classnames";

function Article({ className, value, onClick }) {
  const articleClasses = classNames(
    "w-full h-full bg-persian-red rounded-xl text-center text-2xl hover:bg-persian-red/90 transition-colors cursor-pointer",
    className
  );

  return (
    <div className={articleClasses} onClick={onClick}>
      {value}
    </div>
  );
}

export default Article;
