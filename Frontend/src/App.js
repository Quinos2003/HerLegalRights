import "./App.css";
import Hero from "./Components/Hero/Hero";
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav.js";
import About from "./Components/AboutUs/About.js";
import Case from "./Components/Case Studies/Case.js";
import Workshop from "./Components/Empowerment workshop/Workshop.js";
import Resources from "./Components/legal resources/Resources.js";
import Actions from "./Components/Legal actions/Action.js";

function App() {
  return (
    <div>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/Case" element={<Case />} />
          <Route path="/Workshop" element={<Workshop/>}/>
          <Route path="/Resources" element={<Resources/>}/>
          <Route path="/actions" element={<Actions/>}/>

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
