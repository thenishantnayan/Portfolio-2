import Navbar from './Navbar';
import Hero from './Hero';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="bg-dark">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
