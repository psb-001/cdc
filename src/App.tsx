import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import Events from './components/Events'
import Team from './components/Team'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Events />
        <Leadership />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
