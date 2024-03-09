import "./App.css";
import Hero from "./Components/Hero/Hero";
import { HashRouter, Routes, Route } from "react-router-dom";
// import Nav from "./Components/Nav/Nav.js";
import About from "./Components/AboutUs/About.js";

function App() {
  return (
    <div>
      <HashRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
