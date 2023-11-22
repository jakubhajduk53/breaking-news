import { useState } from "react";
import Article from "../components/Article";

function MainPage() {
  const [isOpened, setIsOpened] = useState(false);
  const [activeArticle, setActiveArticle] = useState("");

  return (
    <div className="w-full h-full">
      {!isOpened ? (
        <div className="h-full grid grid-rows-5 grid-cols-4 justify-items-center place-content-center p-2 gap-2">
          <Article className="col-span-2" value="Article One" />
          <Article className="row-span-2" value="Article Two" />
          <Article value="Article Three" />
          <Article value="Article Four" />
          <Article value="Article Five" />
          <Article value="Article Six" />
          <Article className="col-span-3 row-span-2" value="Article Seven" />
          <Article className="row-span-2" value="Article Eight" />
          <Article className="col-span-4 " value="Article Nine" />
        </div>
      ) : (
        <div className="w-full h-full bg-persian-red">{activeArticle}</div>
      )}
    </div>
  );
}

export default MainPage;
