import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const StyleGuide = () => (
  <div className="styleguide">
    <h1 className="header">Style Guide</h1>

    <div className="styleguide__colors">
      <div className="white">white</div>
      <div className="light">light</div>
      <div className="medium">medium</div>
      <div className="dark">dark</div>
      <div className="black">black</div>
    </div>

    <div className="styleguide__icons">
      <FontAwesomeIcon icon={faArrowRight} />
      <FontAwesomeIcon icon={faArrowDown} />
      <FontAwesomeIcon icon={faSun} />
      <FontAwesomeIcon icon={faMoon} />
    </div>
    <div className="styleguide__headings">
      <h1>This is heading h1</h1>
      <h2>This is heading h2</h2>
      <h3>This is heading h3</h3>
      <h4>This is heading h4</h4>
      <h5>This is heading h5</h5>
      <h6>This is heading h6</h6>
      <p> This is pharagraph</p>
    </div>
  </div>
);

export default StyleGuide;
