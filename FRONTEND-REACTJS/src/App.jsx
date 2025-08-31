import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import About from "./pages/About/About";
import News from "./pages/News/News";
import Stations from "./pages/Stations/Stations";

function App() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 min-h-100vh w-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Stations />} />
        <Route path="/News" element={<News />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
