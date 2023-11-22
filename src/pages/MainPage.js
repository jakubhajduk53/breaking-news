import { useState } from "react";
import Article from "../components/Article";
import FullArticle from "../components/FullArticle";

function MainPage() {
  const [isOpened, setIsOpened] = useState(false);
  const [activeArticle, setActiveArticle] = useState("");

  const articles = [
    {
      id: 1,
      additionalClasses: "col-span-2",
      value: "Article One",
    },
    {
      id: 2,
      additionalClasses: "row-span-2",
      value: "Article Two",
    },
    {
      id: 3,
      additionalClasses: "",
      value: "Article Three",
    },
    {
      id: 4,
      additionalClasses: "",
      value: "Article Four",
    },
    {
      id: 5,
      additionalClasses: "",
      value: "Article Five",
    },
    {
      id: 6,
      additionalClasses: "",
      value: "Article Six",
    },
    {
      id: 7,
      additionalClasses: "col-span-3 row-span-2",
      value: "Article Seven",
    },
    {
      id: 8,
      additionalClasses: "row-span-2",
      value: "Article Eight",
    },
    {
      id: 9,
      additionalClasses: "col-span-4",
      value: "Article Nine",
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
                value={article.value}
                onClick={() => {
                  setIsOpened(true);
                  setActiveArticle(article.value);
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
            setActiveArticle("");
          }}
        />
      )}
    </div>
  );
}

export default MainPage;
