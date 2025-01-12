import React, { useEffect } from "react";
import { Nav } from './Components/Nav';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Education } from './Components/Education';
import { Skills } from './Components/Skills';
import { Experience } from './Components/Experience';
import {Project} from "./Components/Project";
import './Components/Styles/Animation.css';


function App() {
  useEffect(() => {
    // Create an IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-items"); // Add class to trigger animation
        } else {
          entry.target.classList.remove("show-items"); // Reset animation
        }
      });
    });

    // Elements to observe
    const elementsToObserve = [
      ".scroll-scale", ".scroll-bottom", ".scroll-left",".animate-typing",".animate-blink",".scroll-mobile",
      ".scroll-right"
    ];

    // Attach observer to elements
    elementsToObserve.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => observer.observe(el));
    });

    // Clean-up observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='bg-red-300 h-full'>
      <Nav />
      <Home />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Project />
    </div>
  )
}

export default App
