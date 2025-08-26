import { Camera } from "lucide-react";
import "./App.css";
const message = "Hello Jorge";

import { useState } from "react";

const App = (d) => {
  const [mg, setMg] = useState("OLA");
  return (
    <>
      <div className="containr">
        <Camera color="black" size={20} />;
      </div>
    </>
  );
};

export default App;
