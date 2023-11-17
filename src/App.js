import Header from "./components/Header";
import Article from "./components/Article";

function App() {
  return (
    <div className="flex flex-col w-full h-screen bg-linen text-raisin-black">
      <Header />
      <div className="h-full grid grid-rows-5 grid-cols-4 justify-items-center place-content-center p-2 gap-2">
        <Article className="w-full h-full col-span-2" value="Article One" />
        <Article className="w-full h-full row-span-2" value="Article Two" />
        <Article className="w-full h-full" value="Article Three" />
        <Article className="w-full h-full" value="Article Four" />
        <Article className="w-full h-full" value="Article Five" />
        <Article className="w-full h-full" value="Article Six" />
        <Article
          className="w-full h-full col-span-3 row-span-2"
          value="Article Seven"
        />
        <Article className="w-full h-full row-span-2" value="Article Eight" />
        <Article className="w-full h-full col-span-4 " value="Article Nine" />
      </div>
    </div>
  );
}

export default App;
