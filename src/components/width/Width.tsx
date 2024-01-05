import React from "react";

interface Props {
  text: string;
  number?: number;
}

const Width: React.FC<Props> = ({ text, number }) => {
  return (
    <div>
      <p className="width-animation">{text} </p>
      <p className="width-animation__number">0{number}</p>
    </div>
  );
};

export default Width;
