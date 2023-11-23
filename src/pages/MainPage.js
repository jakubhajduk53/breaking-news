import { useState } from "react";
import Article from "../components/Article";
import FullArticle from "../components/FullArticle";

function MainPage() {
  const [isOpened, setIsOpened] = useState(false);
  const [activeArticle, setActiveArticle] = useState({
    title: "",
    subtitle: "",
    value: "",
  });

  const articles = [
    {
      id: 1,
      additionalClasses: "col-span-2",
      title: "Article One",
      subtitle: "",
      value: "",
    },
    {
      id: 2,
      additionalClasses: "row-span-2",
      title: "Article Two",
      subtitle: "",
      value: "",
    },
    {
      id: 3,
      additionalClasses: "",
      title: "Article Three",
      subtitle: "",
      value: "",
    },
    {
      id: 4,
      additionalClasses: "",
      title: "Article Four",
      subtitle: "",
      value: "",
    },
    {
      id: 5,
      additionalClasses: "",
      title: "Article Five",
      subtitle: "",
      value: "",
    },
    {
      id: 6,
      additionalClasses: "",
      title: "Article Six",
      subtitle: "",
      value: "",
    },
    {
      id: 7,
      additionalClasses: "col-span-3 row-span-2",
      title: "Article Seven",
      subtitle: "",
      value: "",
    },
    {
      id: 8,
      additionalClasses: "row-span-2",
      title: "Article Eight",
      subtitle: "",
      value: "",
    },
    {
      id: 9,
      additionalClasses: "col-span-4",
      title: "Article Nine",
      subtitle: "",
      value: "",
    },
  ];

  return (
    <div className="w-full h-full">
      {!isOpened ? (
        <div className="h-full grid grid-rows-5 grid-cols-4 justify-items-center place-content-center p-2 gap-2">
          {articles.map((article) => {
            return (
              <Article
                key={article.id}
                className={article.additionalClasses}
                title={article.title}
                subtitle={article.subtitle}
                value={article.value}
                onClick={() => {
                  setIsOpened(true);
                  setActiveArticle({
                    title: article.title,
                    subtitle: article.subtitle,
                    value: article.value,
                  });
                }}
              />
            );
          })}
        </div>
      ) : (
        <FullArticle
          value={activeArticle}
          onClick={() => {
            setIsOpened(false);
            setActiveArticle({
              title: "",
              subtitle: "",
              value: "",
            });
          }}
        />
      )}
    </div>
  );
}

export default MainPage;
