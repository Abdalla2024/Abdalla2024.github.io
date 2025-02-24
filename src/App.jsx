import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="w-full">
        <section id="home" className="min-h-screen w-full pt-16">
          <Home />
        </section>
        
        <section id="about" className="min-h-screen w-full">
          <About />
        </section>

        <section id="experience" className="min-h-screen w-full">
          <Experience />
        </section>

        <section id="projects" className="min-h-screen w-full">
          <Projects />
        </section>

        <section id="contact" className="w-full py-16">
          <Contact />
        </section>
      </div>
    </div>
  )
}

export default App
