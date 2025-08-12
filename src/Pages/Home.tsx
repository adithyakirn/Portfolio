import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Main from "../Components/Main/Projects/Main";
import Arsenal from "../Components/Main/Projects/Arsenal";
import Projects from "../Components/Main/Projects/Projects";

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <div className="section-devider h-[1px] bg-[linear-gradient(90deg,transparent,#333,transparent)] m-[120px_0]"></div>
        <Projects />
      <Arsenal />
      <Footer />
    </>
  );
};

export default Home;
