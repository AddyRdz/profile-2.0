import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Projects } from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
     <Navbar/>
     <Home/>
     <About/>
     <Projects/>
     <Skills/>
     <Resume/>
    <Contact/>
    <Footer/>
     
    </div>
  );
}

export default App;
