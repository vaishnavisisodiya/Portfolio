import React from "react";
import NavBar from './component/NavBar';
import Banner from './component/Banner';
import Skills from './component/Skills';
import About from "./component/About";
 import ProjectCard from "./component/ProjectCard";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

const App = () => {
  return (<>
    <NavBar />
    <Banner />
    <About />
    <Skills />
    <ProjectCard />
    <Contact />
    <Footer />
  </>)
}
export default App;