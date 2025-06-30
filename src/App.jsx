import Header from "./components/Header";
import Section from "./components/Section";
import CustomCursor from "./components/customCursor";
import EducationCard from "./components/EducationCard";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Skills from "./components/Skills";


function App(){
  return(
    <>
      <Header />
      <Section />
      <CustomCursor />
      <EducationCard />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </>
  )
}

export default App;