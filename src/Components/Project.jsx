import { useEffect } from "react";
import "./Styles/Project.css"; // Import the CSS for the animation

export function Project() {
  useEffect(() => {
    // Create an IntersectionObserver to trigger animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("spin-fade-in"); // Add the animation class
        } else{
            entry.target.classList.remove("spin-fade-in");
        }
            
       
      });
    });

    // Select elements to observe
    const elementsToObserve = document.querySelectorAll(".scroll-item");

    // Attach the observer to each element
    elementsToObserve.forEach((el) => observer.observe(el));

    // Clean up observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-12">
      <h1 className="text-2xl font-semibold text-center mb-8">Projects</h1>
      <div className="lg:flex flex-wrap justify-center gap-8">
        {/* Project 1 */}
        <div 
          className="relative w-72 h-48 bg-white rounded-xl shadow-lg overflow-hidden  scroll-item"
          data-observe
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 "></div>
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <h2 className="text-xl font-bold text-white">Project 1</h2>
            <p className="text-white">Google Dorking Website</p>
            <a href="#" className="text-sm text-white underline mt-2">View Project</a>
          </div>
        </div>

        {/* Project 2 */}
        <div 
          className="relative w-72 h-48 bg-white rounded-xl shadow-lg overflow-hidden opacity-0 transition duration-500 transform scroll-item"
          data-observe
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-green-500 to-teal-500 opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <h2 className="text-xl font-bold text-white">Project 2</h2>
            <p className="text-white">Cocoon Software Institute Website</p>
            <a href="#" className="text-sm text-white underline mt-2">View Project</a>
          </div>
        </div>

        {/* Project 3 */}
        <div 
          className="relative w-72 h-48 bg-white rounded-xl shadow-lg overflow-hidden opacity-0 transition duration-500 transform scroll-item"
          data-observe
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-4">
            <h2 className="text-xl font-bold text-white">Project 3</h2>
            <p className="text-white">ReactJS Portfolio</p>
            <a href="#" className="text-sm text-white underline mt-2">View Project</a>
          </div>
        </div>
      </div>
    </section>
  );
}
