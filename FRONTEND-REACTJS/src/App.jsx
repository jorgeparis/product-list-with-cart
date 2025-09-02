import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./pages/AboutUS/AboutUs";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Pages from "./pages/Pages/Pages";
import RadioStation from "./pages/RadioStation/RadioStation";

function App() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Radio Station" element={<RadioStation />} />
          <Route path="/Pages" element={<Pages />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
