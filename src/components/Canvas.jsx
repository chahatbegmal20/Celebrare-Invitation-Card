import card from "../assets/card.png";
import TextBox from "./TextBox";

const Canvas = ({ textBoxes }) => {
  return (
    <div className="relative">
      <img
        src={card}
        className="object-contain mx-auto h-full select-none"
      ></img>
      {textBoxes?.map((box, index) => {
        return (
          <TextBox
            key={index}
            text={box.text}
            font={box.font}
            color={box.color}
            size={box.size}
          />
        );
      })}
    </div>
  );
};

export default Canvas;
