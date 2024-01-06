import Underline from "../../components/underline/Underline";
import "../../data";
import { useSelector } from "react-redux";
import data from "../../data";

const Home = () => {
  const language = useSelector((state: any) => state.language.language);
  const content = data[language as keyof typeof data];

  return (
    <section className="home">
      <h1>
        {content.title[0]} <strong>Ikbal arslan</strong>
      </h1>

      <p>{content.title[1]}</p>
      <div className="home__links">
        {content.home_liks.map((item: string, index: number) => (
          <Underline key={index} text={item} />
        ))}
      </div>
    </section>
  );
};

export default Home;
