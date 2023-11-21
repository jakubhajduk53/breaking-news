import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col w-full h-screen bg-linen text-raisin-black">
      <Header />
      <Routes>
        <Route element={<MainPage />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
