import Header from "./components/Header";
import Article from "./components/Article";

function App() {
  return (
    <div className=" w-full h-screen bg-linen text-raisin-black">
      <Header />
      <div className="grid grid-rows-5 grid-cols-4 justify-items-center place-content-center">
        <Article className="w-[450px] h-[250px]" value="Article One" />
        <Article className="w-[250px] h-[350px]" value="Article Two" />
        <Article className="w-[250px] h-[250px]" value="Article Three" />
        <Article className="w-[250px] h-[250px]" value="Article Four" />
        <Article className="w-[250px] h-[250px]" value="Article Five" />
        <Article className="w-[250px] h-[250px]" value="Article Six" />
      </div>
    </div>
  );
}

export default App;
