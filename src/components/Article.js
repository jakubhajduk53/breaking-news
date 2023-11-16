import classNames from "classnames";

function Article({ width, height, value }) {
  const articleClasses = classNames(
    "bg-persian-red rounded-xl text-center text-2xl"
  );

  return (
    <div className={articleClasses} style={{ width: width, height: height }}>
      {value}
    </div>
  );
}

export default Article;
