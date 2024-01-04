import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  text: string;
}

const Underline: React.FC<Props> = ({ text }) => {
  return (
    <button className="underline">
      <FontAwesomeIcon icon={faArrowRight} />
      {text}
    </button>
  );
};

export default Underline;
