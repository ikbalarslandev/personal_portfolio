import Underline from "../components/underline/Underline";

const Home = () => {
  return (
    <div className="home">
      <h1>
        Hey I`m <strong>Ikbal arslan</strong>
      </h1>
      <p>I am fronted developper</p>
      <div className="home__links">
        <Underline text="see my projects" />
        <Underline text="more about me" />
      </div>
    </div>
  );
};

export default Home;
