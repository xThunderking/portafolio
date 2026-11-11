import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import Contact from "./components/Contact"
import MotionExperience from "./components/MotionExperience"

function App() {
  return (
    <MotionExperience>
      <div className="min-h-screen bg-black">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <About />
          <Technologies />
          <Contact />
        </main>
      </div>
    </MotionExperience>
  )
}

export default App
