import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-raisin-black text-raisin-black grid w-full h-screen">
      <Header />
      <Routes>
        <Route element={<MainPage />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
