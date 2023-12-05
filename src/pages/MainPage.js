import { useState, useEffect } from "react";
import Article from "../components/Article";
import FullArticle from "../components/FullArticle";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const SITE_URL = process.env.REACT_APP_SITE_URL;

function MainPage() {
  const [newsData, setNewsData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${SITE_URL}everything?q=breaking&pageSize=10&page=${page}&apiKey=${API_KEY}`
        );
        setNewsData(response.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]);

  const [isOpened, setIsOpened] = useState(false);
  const [activeArticle, setActiveArticle] = useState({});

  return (
    <div className="h-full">
      {!isOpened ? (
        <div className="grid grid-rows-4 grid-cols-3 p-2 gap-2 w-full h-full">
          {newsData?.map((article) => {
            return (
              <Article
                description={article.description}
                title={article.title}
                source={article.source.name}
                onClick={() => {
                  setIsOpened(true);
                  setActiveArticle(article);
                }}
              />
            );
          })}
          <Article
            onClick={() => {
              setPage((prevValue) => {
                if (prevValue > 1) {
                  return prevValue - 1;
                } else {
                  return prevValue;
                }
              });
            }}
            title="Previous Page"
            className="text-5xl justify-center select-none"
          />
          <Article
            onClick={() => {
              setPage((prevValue) => {
                if (prevValue < 10) {
                  return prevValue + 1;
                } else {
                  return prevValue;
                }
              });
            }}
            title="Next Page"
            className="text-5xl justify-center select-none"
          />
        </div>
      ) : (
        <FullArticle
          article={activeArticle}
          onClick={() => {
            setIsOpened(false);
            setActiveArticle({});
          }}
        />
      )}
    </div>
  );
}

export default MainPage;
