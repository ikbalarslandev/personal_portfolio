import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  work: string;
  genre: string;
}

const Showarrow: React.FC<Props> = ({ work, genre }) => {
  return (
    <button className="showarrow">
      <div className="showarrow-animation">
        <FontAwesomeIcon
          className="showarrow-animation__icon"
          icon={faArrowRight}
        />
        <span className="showarrow-animation__text">{work}</span>
      </div>
      {genre}
    </button>
  );
};

export default Showarrow;
