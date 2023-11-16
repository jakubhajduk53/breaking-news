import Header from "./components/Header";
import Article from "./components/Article";

function App() {
  return (
    <div className="grid w-full h-screen bg-linen text-raisin-black">
      <Header />
      <Article width={250} height={250} value="Article One" />
    </div>
  );
}

export default App;
