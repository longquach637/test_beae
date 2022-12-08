import { useState } from "react";
import "./App.css";
import Tabs from "./component/Tabs";
import Gallery from "./component/Gallery";

function App() {
  const [active, setActive] = useState("tab");
  const handChange = (value) => {
    setActive(value);
  };

  return (
    <div className="App">
      {active === "tab" && <Tabs />}
      {active === "gallery" && <Gallery />}
      <div className="items-center">
        {active === "tab" ? (
          <span
            className="dot h-15 w-15 cursor-pointer bg-black1 mb-marginTop rounded-full inline-block mr-15 duration-75"
            onClick={() => handChange("tab")}
          ></span>
        ) : (
          <span
            className="dot h-15 w-15 cursor-pointer bg-gray-900 mb-marginTop rounded-full inline-block mr-15 duration-75"
            onClick={() => handChange("tab")}
          ></span>
        )}

        {active === "gallery" ? (
          <span
            className="h-15 w-15 cursor-pointer bg-black1 mb-marginTop rounded-full inline-block"
            onClick={() => handChange("gallery")}
          ></span>
        ) : (
          <span
            className="h-15 w-15 cursor-pointer bg-gray-900 mb-marginTop rounded-full inline-block"
            onClick={() => handChange("gallery")}
          ></span>
        )}
      </div>
    </div>
  );
}

export default App;
