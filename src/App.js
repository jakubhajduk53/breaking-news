import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-raisin-black text-raisin-black grid w-full h-screen">
      <Header />
      <Routes>
        <Route element={<MainPage />} path="/" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </div>
  );
}

export default App;
