import "./App.css";
const message = "Hello Jorge";

import { useState } from "react";

const [mgs, setMessage] = useState("OLA JORGE");
const App = (d) => {
  return (
    <>
      <div className="containr">
        <h1 class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
          {mgs}
        </h1>
        <h1 class="text-sm font-semibold">Hello world!</h1>
        <button
          onClick={() => {
            setMessage("Hello Jorge");
          }}
        >
          {" "}
          Click me
        </button>
      </div>
    </>
  );
};

export default App;
