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
          `${SITE_URL}everything?q=bitcoin&apiKey=${API_KEY}`
        );
        setNewsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(newsData);

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
      title: "Article #1",
      subtitle:
        "Explore the fascinating world of quantum computing in this thought-provoking article, unraveling the potential and challenges of harnessing quantum mechanics for advanced computational power.",
      value:
        "Donec vestibulum, velit nec aliquet mollis, metus risus rhoncus purus, in imperdiet dolor neque ac mauris. Mauris ex erat, gravida ut laoreet et, convallis ac mi. Etiam laoreet erat vitae odio vulputate suscipit. Nunc ipsum tellus, eleifend at dui in, mollis suscipit nibh. Suspendisse dapibus laoreet pharetra. Fusce augue sapien, aliquam nec tempor vitae, ultricies id risus. Aliquam eget libero auctor, finibus ipsum id, blandit dolor.",
    },
    {
      id: 2,
      additionalClasses: "row-span-2",
      title: "Article #2",
      subtitle:
        "Dive into the future of sustainable energy sources with an enlightening article that examines the latest innovations in renewable technologies and their impact on our planet.",
      value:
        "Fusce tempor orci non lobortis maximus. Morbi turpis lorem, faucibus quis quam sit amet, euismod gravida libero. Nunc turpis justo, accumsan pulvinar gravida at, iaculis ornare lectus. Morbi sollicitudin egestas diam, sit amet ultricies lectus faucibus rutrum. In consectetur tincidunt hendrerit. Donec at consequat magna. Cras ac tempus urna, ac tempor nibh. Donec sagittis tortor quis risus vestibulum efficitur. Nullam imperdiet orci erat, sit amet vehicula arcu iaculis sit amet. In enim nulla, congue et congue quis, malesuada vitae tellus.",
    },
    {
      id: 3,
      additionalClasses: "",
      title: "Article #3",
      subtitle:
        "Discover the psychology behind decision-making in this captivating article, delving into the intricate processes of the human mind that shape our choices and behaviors.",
      value:
        "Maecenas nec leo eget erat venenatis dapibus. Proin erat nulla, fermentum eget vehicula vitae, porta sagittis lectus. Proin dui diam, placerat ut nisl vitae, venenatis tempus odio. Donec elit magna, elementum eget risus id, fermentum tempus lorem. Nullam semper libero ut mauris tristique, ut ornare ipsum porta. Vestibulum commodo vestibulum lacus eget molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus facilisis risus at erat sodales pretium. Vivamus tempus velit id elit consequat, quis iaculis magna mollis. Donec tempor accumsan est, sed consequat odio tincidunt in. ",
    },
    {
      id: 4,
      additionalClasses: "",
      title: "Article #4",
      subtitle:
        "Uncover the mysteries of artificial intelligence and its role in shaping the future with this insightful article, exploring both the promises and ethical considerations of AI advancements.",
      value:
        "Suspendisse luctus sem sit amet tortor varius, et maximus ipsum interdum. Proin sed varius dolor, non finibus quam. Integer nec sapien vulputate, tincidunt magna vitae, interdum velit. Nullam bibendum, turpis eu maximus ullamcorper, ipsum massa cursus lacus, nec placerat libero ex ac mi. Nunc ut luctus tortor. Vestibulum finibus, enim ut sodales consequat, mauris nibh fringilla lorem, sed ornare magna nisi quis lacus. Phasellus quis blandit dolor. Donec diam ipsum, rutrum eget ex a, accumsan convallis orci. Nunc lectus metus, lobortis luctus magna in, lacinia blandit enim. Praesent hendrerit porta ipsum at luctus. ",
    },
    {
      id: 5,
      additionalClasses: "",
      title: "Article #5",
      subtitle:
        "Embark on a culinary journey with an engaging article that explores the cultural significance of street food around the world, showcasing unique flavors and traditions.",
      value:
        "Sed pharetra arcu eu dolor feugiat aliquet eget ac sem. Curabitur faucibus placerat magna, eu placerat nunc interdum vitae. Vestibulum mollis hendrerit diam. Nullam sollicitudin tortor eu sollicitudin elementum. Morbi dictum neque in congue consequat. Nulla eu neque eu ex dignissim eleifend vitae non nisl. Maecenas nec faucibus tortor. Quisque accumsan fermentum quam, eget ultricies dolor lobortis at. Curabitur tempus orci non justo faucibus feugiat. Pellentesque luctus turpis tincidunt, euismod orci vitae, euismod turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt malesuada molestie. Maecenas at neque eu erat cursus venenatis. ",
    },
    {
      id: 6,
      additionalClasses: "",
      title: "Article #6",
      subtitle:
        "Delve into the world of space exploration with a riveting article that highlights the latest breakthroughs, challenges, and the ongoing quest to unravel the mysteries of the universe.",
      value:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin vel diam purus. Duis non nunc pellentesque, faucibus nunc at, tempus arcu. Quisque sed efficitur arcu. Nunc sit amet tortor sem. Nullam ut turpis at urna pharetra aliquet. Nam vehicula augue condimentum sapien hendrerit, vel eleifend quam fermentum. Nullam pellentesque felis tempus, varius felis sit amet, dapibus arcu. Vivamus egestas mi sapien, et volutpat est maximus aliquet.",
    },
    {
      id: 7,
      additionalClasses: "col-span-3 row-span-2",
      title: "Article #7",
      subtitle:
        "Unlock the secrets of productivity and work-life balance in this practical article, offering actionable tips and strategies to enhance efficiency and well-being in the professional realm.",
      value:
        "Phasellus vitae ante sed erat congue scelerisque. Aenean et dui a mauris hendrerit ultricies. Nullam dictum lectus id ligula tincidunt, sit amet egestas ligula aliquam. Proin eu varius tortor, id vehicula ipsum. Nunc vel sapien ligula. Pellentesque ante velit, elementum ut urna quis, dictum placerat dolor. Curabitur vehicula convallis tellus et consectetur. Phasellus quis sodales erat. Ut auctor odio in lacus placerat, et consequat mi suscipit. Integer ipsum mauris, ullamcorper vel aliquet eu, tempus mattis tellus. Phasellus fringilla est non porta ullamcorper. Aenean accumsan nulla enim, quis elementum odio porta ac.",
    },
    {
      id: 8,
      additionalClasses: "row-span-2",
      title: "Article #8",
      subtitle:
        "Explore the intersection of technology and healthcare in this thought-provoking article, examining how innovations like telemedicine and wearable devices are reshaping the medical landscape.",
      value:
        "Suspendisse mauris augue, elementum eu neque quis, tempor mollis nulla. Donec vitae nunc libero. Donec cursus ex tristique luctus mattis. Sed vel pellentesque ligula. Donec molestie consequat elit, nec fermentum dui tempor nec. Donec quis accumsan erat. Praesent et accumsan orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam euismod justo et pretium ultrices.",
    },
    {
      id: 9,
      additionalClasses: "col-span-4",
      title: "Article #9",
      subtitle:
        "Step into the realms of virtual reality with an exciting article that explores the evolving landscape of VR technology, from entertainment to education and beyond.",
      value:
        "Aliquam tristique bibendum est in consequat. Phasellus tincidunt risus nisl, ac dignissim magna ullamcorper vel. Sed tincidunt eleifend dolor nec tristique. Fusce molestie ipsum dictum, sodales arcu vitae, aliquet erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer hendrerit, nisi sit amet ullamcorper vulputate, quam tortor rhoncus sem, quis tincidunt erat purus sed est. Proin congue aliquet cursus. Sed gravida, justo id posuere sagittis, augue quam varius est, eget convallis ex metus id lorem. Nam finibus euismod vestibulum. Nullam vestibulum risus dolor, sit amet aliquam ex feugiat nec.",
    },
  ];

  return (
    <div className="w-full h-full bg-raisin-black text-raisin-black">
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
