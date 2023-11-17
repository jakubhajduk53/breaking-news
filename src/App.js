import Header from "./components/Header";
import Article from "./components/Article";

function App() {
  return (
    <div className="flex flex-col w-full h-screen bg-linen text-raisin-black">
      <Header />
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
    </div>
  );
}

export default App;
