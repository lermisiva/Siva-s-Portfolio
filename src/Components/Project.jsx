import { useEffect } from "react";
import "./Styles/Project.css";
import "./Styles/Animation.css"; 

export function Project() {
  useEffect(() => {
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("spin-fade-in");
        } else {
          entry.target.classList.remove("spin-fade-in");
        }
      });
    });

    const elementsToObserve = document.querySelectorAll(".scroll-item");
    elementsToObserve.forEach((el) => observer.observe(el));

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
          className="group relative w-72 h-48 bg-[url('./S.png')] bg-cover bg-center rounded-xl shadow-lg overflow-hidden scroll-item"
        >
          {/* Overlay for Hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-purple-600 to-red-700 bg-opacity-50 transform translate-y-full group-hover:translate-y-0 transition duration-500"></div>
          <div className="absolute inset-0  p-4 opacity-0 group-hover:opacity-100 transition duration-500">
            <h2 className="text-lg font-bold text-white top-o left-0 flex justify-center">Portfolio</h2>
            <p className="text-white">This is portfolio of mine created with react.js, jsx, Tailwind CSS and javascript. Respensive.</p>
            <a href="" className="text-sm text-white underline mt-5">View Project</a>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className="group relative w-72 h-48  project-2 bg-cover rounded-xl shadow-lg overflow-hidden scroll-item"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-green-500 to-teal-500 opacity-50"></div>
          {/* Hover Content */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-purple-600 to-red-700 bg-opacity-50 transform translate-y-full group-hover:translate-y-0 transition duration-500">
            <div className="absolute inset-0  justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-500">
              <h2 className="text-xl font-bold text-white">Google Dorking</h2>
              <p className="text-white"></p>
              <a href="#" className="text-sm text-white underline mt-2">View Project</a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div
          className="group relative w-72 h-48 bg-white rounded-xl shadow-lg overflow-hidden scroll-item"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 opacity-50"></div>
          {/* Hover Effect */}
          <div className="absolute inset-0 bg-black bg-opacity-50 transform translate-y-full group-hover:translate-y-0 transition duration-500">
            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-500">
              <h2 className="text-xl font-bold text-white">Project 3</h2>
              <p className="text-white">ReactJS Portfolio</p>
              <a href="#" className="text-sm text-white underline mt-2">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
