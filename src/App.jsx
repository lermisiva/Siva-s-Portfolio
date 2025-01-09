import React, { useEffect } from "react";
import { Nav } from './Components/Nav';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Education } from './Components/Education';
import { Skills } from './Components/Skills';
import { Experience } from './Components/Experience';
import './App.css';

function App() {
  return (
 <div className='bg-red-300 h-full'>
  <Nav />
  <Home />
  <About />
  <Education />
  <Skills />
  <Experience />
 </div>
  )
}

export default App
