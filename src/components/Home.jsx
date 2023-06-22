import Hero from "./Hero";
import AboutMe from "./Aboutme";
import Projects from "./Projects";
import Contactus from "./Contactus";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <AboutMe />
      <Projects />
      <Contactus />
    </div>
  );
}
