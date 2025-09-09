import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/AboutUS/AboutUs";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Projects from "./pages/Projects/Projects";
import TechnicalSupport from "./pages/TechnicalSupport/TechnicalSupport";

function App() {
  return (
    <>
      <div className="main-container min-w-screen min-h-screen">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Blog" element={<Blog />} />

          <Route path="/Projects" element={<Projects />} />
          <Route path="/Technical Support" element={<TechnicalSupport />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
