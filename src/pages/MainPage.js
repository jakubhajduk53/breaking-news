import { useState, useEffect } from "react";
import Article from "../components/Article";
import FullArticle from "../components/FullArticle";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const SITE_URL = process.env.REACT_APP_SITE_URL;

function MainPage() {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${SITE_URL}everything?q=breaking&pageSize=10&apiKey=${API_KEY}`
        );
        setNewsData(response.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [isOpened, setIsOpened] = useState(false);
  const [activeArticle, setActiveArticle] = useState({});
  console.log(activeArticle);

  return (
    <div className="flex flex-col w-full h-full bg-raisin-black text-raisin-black">
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
