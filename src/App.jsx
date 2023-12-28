import { useState } from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import Controls from "./components/Controls";

function App() {
  const [textBoxes, setTextBoxes] = useState([]);

  return (
    <div className="h-screen flex flex-col pt-14">
      <div className="flex flex-1">
        <div className="basis-2/3">
          <Canvas textBoxes={textBoxes} />
        </div>
        <div className="flex-1">
          <Controls setTextBoxes={setTextBoxes} />
        </div>
      </div>
    </div>
  );
}

export default App;
