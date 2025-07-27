import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import { useEffect } from "react"
// import Footer from './Components/Footer/Footer'
import Arsenal from './Components/Main/Projects/Arsenal'
import Projects from './Components/Main/Projects/Projects'
import Footer from './Components/Footer/Footer'

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    ScrollSmoother.create({
      wrapper: "#wrapper",
      content: "#inner-content",
    })
  }, [])
  return (
    <>
      <div id="wrapper" className="container-wrapper min-h-[100vh] m-[0_auto]">
        <div id="inner-content" className="m-[0_auto]">
          <Header />
          <Main />
          <div className="section-devider h-[1px] bg-[linear-gradient(90deg,transparent,#333,transparent)] m-[120px_0]"></div>
          <Projects key="projects" />
          <Arsenal/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
