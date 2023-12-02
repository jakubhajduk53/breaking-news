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
    <div className="flex flex-col row-span-5 w-full h-full bg-raisin-black text-raisin-black">
      {!isOpened ? (
        <div className=" grid grid-rows-4 grid-cols-3 p-2 gap-2">
          {newsData?.map((article) => {
            return (
              <Article
                description={article.description}
                title={article.title}
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
                }
              });
            }}
            title="Previous Page"
            className="text-5xl justify-center"
          />
          <Article
            onClick={() => {
              setPage((prevValue) => {
                return prevValue + 1;
              });
            }}
            title="Next Page"
            className="text-5xl justify-center"
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
