import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
import Contact from "./components/Contact"

function App() {
  return (
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
  )
}

export default App
