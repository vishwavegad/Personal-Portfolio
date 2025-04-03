import './App.css'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Education/>
      <ContactMe/>
      <Footer/>
    </>
  )
}

export default App
