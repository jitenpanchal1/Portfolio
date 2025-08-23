import Home from './Pages/Home'
import Skill from './Pages/Skill'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Header from './Pages/Header'
import Loader from "./animation/Loader"
import { lazy, Suspense, useEffect, useState } from 'react'
import Project from './Pages/Project'
import Footer from './Pages/Footer'

const Silk = lazy(() => import("./animation/Silk"))

function App() {

  const [ready, setready] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setready(true)
    }, 1000)
    return () => clearTimeout()
  }, [])

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}

        />


        {ready && (
          <>
            <Header />
            <Home />
            <Skill />
            <About />
            <Project />
            <Contact />
            <Footer />
          </>
        )}
      </Suspense>

    </>
  )
}

export default App
