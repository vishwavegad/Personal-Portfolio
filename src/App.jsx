import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Projects/>
      <Skills/>
      <ContactMe/>
      <Footer/>
    </>
  )
}

export default App
