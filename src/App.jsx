import './App.css'
import AboutMe from './components/aboutme'
import Contactus from './components/contactus'
import Footer from './components/footer'
import Hero from './components/hero'
import Navbar from './components/navbar'
import Projects from './components/projects'

AboutMe
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <Projects></Projects>
    <Contactus></Contactus>
    <Footer></Footer>
    {/* </Navbar> */}
    </>
  )
}
export default App
