import React from "react";

interface Props {
  text: string;
}

const Width: React.FC<Props> = ({ text }) => {
  return <h1 className="width-animation">{text}</h1>;
};

export default Width;
