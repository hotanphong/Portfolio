import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import ScrollRocket from './components/ScrollRocket/ScrollRocket'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <ScrollRocket />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
