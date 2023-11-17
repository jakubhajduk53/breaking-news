import classNames from "classnames";

function Article({ className, value }) {
  const articleClasses = classNames(
    "bg-persian-red rounded-xl text-center text-2xl hover:bg-persian-red/90 transition-colors",
    className
  );

  return <div className={articleClasses}>{value}</div>;
}

export default Article;
