import { useState } from "react";

const Controls = ({ setTextBoxes }) => {
  const [font, setFont] = useState("Arial");
  const [size, setSize] = useState(14);
  const [color, setColor] = useState("#000000");
  const [text, setText] = useState("");

  return (
    <div className="shadow-2xl rounded p-4 border border-black inline-block">
      <div className="w-full flex justify-between p-4 items-center">
        <label>Font: </label>
        <select
          className="border border-cyan-950 rounded p-2"
          name="font"
          value={font}
          onChange={(e) => setFont(e.target.value)}
        >
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
          <option value="Helvetica">Helvetica</option>
        </select>
      </div>

      <div className="w-full flex justify-between p-4 items-center">
        <label>Size:</label>
        <input
          className="border border-cyan-950 rounded p-2 ml-5 mr-5 w-full"
          type="number"
          min={1}
          max={80}
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />

        <label>Color: </label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        ></input>
      </div>

      <div className="w-full p-4">
        <label className="block">Add Text:</label>
        <textarea
          className="border-2 border-cyan-950 rounded outline-none w-full h-36 p-2"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          className="bg-purple-700 hover:bg-purple-600 mt-2 text-white rounded py-2 px-4"
          onClick={() => {
            setTextBoxes((prevBoxes) => [
              ...prevBoxes,
              { text, color, size, font },
            ]);
          }}
        >
          Add Text
        </button>
      </div>
    </div>
  );
};

export default Controls;
