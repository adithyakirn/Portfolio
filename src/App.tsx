import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollSmoother from 'gsap/ScrollSmoother'

import { useEffect } from "react"
import Home from './Pages/Home'
import AllProjects from './Pages/AllProjects'
import { Route, Routes } from 'react-router'

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
      <Routes>
        <Route path='/allProjects' element={<AllProjects />} />
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App
