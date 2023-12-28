import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TextBox = ({ text, font, color, size }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [pos, setPos] = useState({ top: 200, left: 200 });

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;

    console.log();
    setPos({ top: e.screenY, left: e.screenX });
  };

  return (
    <div
      className={`absolute bg-white top-[${pos.top - 200}px] left-[${
        pos.left - 10
      }px] border-dotted border-2 p-2 hover:cursor-pointer text-[${size}px] text-[${color}] font-[${font}]`}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
      onMouseMove={handleMouseMove}
    >
      {text}
    </div>
  );
};

export default TextBox;
