import "./App.css";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

/* 
features to add
Name Tooltip (Maybe)
 glowing purple in header name
 hover glow effect on Front end
 Contact me projects card
 responsive design
 button that git bigger when you hover over
 */
function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
