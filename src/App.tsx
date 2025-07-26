import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import { useEffect } from "react"
// import Footer from './Components/Footer/Footer'
import Arsenal from './Components/Main/Projects/Arsenal'
import Projects from './Components/Main/Projects/Projects'
import End from './Components/Footer/End'

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
      <div id="wrapper" className="container-wrapper min-h-[100vh] !p-[0_20px] sm:!p-[0_40px] max-w-[1400px] m-[0_auto]">
        <div id="inner-content" className="container m-[0_auto]">
          <Header />
          <Main />
          <div className="section-devider h-[1px] bg-[linear-gradient(90deg,transparent,#333,transparent)] m-[120px_0]"></div>
          <Projects key="projects" />
          <Arsenal/>
          {/* <Footer /> */}
      <End/>
        </div>
      </div>
    </>
  )
}

export default App
