import { Camera, Funnel } from "lucide-react";
import "./App.css";
const message = "Hello Jorge";

import { ChevronRight } from "lucide-react";
import { useState } from "react";

const App = (d) => {
  const [mg, setMg] = useState("OLA");
  return (
    <>
      <div className="containter flex mt-px items-center justify-center backdrop-grayscale-25 w-full h-full">
        <ul>
          <li className="list-item">
            {" "}
            <Camera color="black" size={20} />
            <Funnel color="blue" size={20} />
            <ChevronRight />
          </li>
          <li className="list-item">
            {" "}
            <Camera color="black" size={20} />
            <Funnel />
            <ChevronRight />
          </li>
          <li className="list-item">
            {" "}
            <Camera color="#000000" size={20} />
            <Funnel />
            <ChevronRight />
          </li>
          <li className="list-item">
            {" "}
            <Camera color="black" size={20} />
            <Funnel />
            <ChevronRight />
          </li>
        </ul>
      </div>
    </>
  );
};

export default App;
