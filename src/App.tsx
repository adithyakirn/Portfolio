import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'

import { useEffect, } from "react"
import Home from './Pages/Home'
import AllProjects from './Pages/AllProjects'
import { Route, Routes } from 'react-router'
import LetsTalk from './Components/LetsTalk/LetsTalk'
import Error404 from './Components/Error/Error'
import PageTransition from './Components/Transition/PageTransition'

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    ScrollSmoother.create({
      wrapper: "#wrapper",
      content: "#inner-content",
    })

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateBodyClass = () => {
      const theme = mediaQuery.matches ? "dark" : "light";
      document.body.classList.remove("dark", "light");
      document.body.classList.add(theme);
    };

    updateBodyClass();
    mediaQuery.addEventListener("change", updateBodyClass);

    return () => {
      mediaQuery.removeEventListener("change", updateBodyClass);
    };
  }, [])
  return (
    <>
      <div id="wrapper" className="container-wrapper min-h-[100vh] m-[0_auto]">
        <div id="inner-content" className="m-[0_auto]">
          <PageTransition>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/allProjects' element={<AllProjects />} />
              <Route path='/lets_talk' element={<LetsTalk />} />
              <Route path='*' element={<Error404 />} />
            </Routes>
          </PageTransition>
        </div>
      </div>
    </>
  )
}
export default App
