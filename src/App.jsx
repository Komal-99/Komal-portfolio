import './App.css'
import AboutMe from './components/aboutme'
import Contactus from './components/contactus'
import Footer from './components/footer'
import Hero from './components/hero'
import Navbar from './components/navbar'
import Projects from './components/projects'
// import { BrowserRouter, Route ,Routes} from 'react-router-dom';
// import Gallery from './components/Gallery'
AboutMe
function App() {
  return(
    // <BrowserRouter>
    <>
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <Projects></Projects>
    <Contactus></Contactus>
    <Footer></Footer>
  
    {/* <Routes>
      <Route path="/" element={<home/>} />
      <Route path="/Gallery" element={<Gallery/>}/>
    </Routes> */}
    </>
  )
  {/* </BrowserRouter> */}
}
export default App
