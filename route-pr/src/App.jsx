import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Stations from "./pages/About/Stations.jsx";

function App() {
  return (
    <div className="container-main flex flex-col w-screen h-screen items-center gap-[4rem]">
      <Navbar />
      <Stations />
    </div>
  );
}

export default App;
