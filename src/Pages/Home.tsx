import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"
import Main from "../Components/Main/Projects/Main"
import Arsenal from "../Components/Main/Projects/Arsenal"
import Projects from "../Components/Main/Projects/Projects"

const Home = () => {
  return (
<div id="wrapper" className="container-wrapper min-h-[100vh] m-[0_auto]">
        <div id="inner-content" className="m-[0_auto]">
          <Header />
          <Main />
          <div className="section-devider h-[1px] bg-[linear-gradient(90deg,transparent,#333,transparent)] m-[120px_0]"></div>
          <Projects />
          <Arsenal/>
          <Footer/>
        </div>
      </div>
  )
}

export default Home