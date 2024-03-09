import './App.css'
import Hero from './Components/Hero/Hero'
import { HashRouter,Routes,Route } from 'react-router-dom';
// import Nav from './Components/Nav/Nav '
import about from './Components/About Us/about'

function App() {

  return (
    <div> 
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/about" element={<about/>}/>

          
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
