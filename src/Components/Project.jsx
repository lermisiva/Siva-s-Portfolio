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
      <h1 id="project"className="text-2xl font-semibold text-center mb-8">Projects</h1>
      <div className="lg:flex flex-wrap justify-center lg:gap-8 ">
        {/* Project 1 */}
        <div className="flex justify-center lg:flex-none">
        <div
          className="group relative w-72 h-48  portfolio bg-cover rounded-xl shadow-lg overflow-hidden scroll-item "
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-300 via-red-500 to-red-950 opacity-50"></div>
          {/* Hover Content */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-purple-600 to-red-700 bg-opacity-50 transform translate-y-full group-hover:translate-y-0 transition duration-500">
            <div className="absolute inset-0  justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-500">
              <h2 className="text-xl font-bold text-white">Portfolio</h2>
              <p className="text-white">This is Portfolio website . Fuly created with HTML, CSS, Javascript, Tailwind css and React js. this is fullu responsive and animated.</p>
              <a href="https://sivabalansportfolio.netlify.app/" className="text-sm text-white underline mt-2">View Project</a>
            </div>
          </div>
        </div>
        </div>

        {/* Project 2 */}
        <div className="flex justify-center lg:flex-none my-20 lg:my-0">
        <div
          className="group relative w-72 h-48  gd bg-cover rounded-xl shadow-lg overflow-hidden scroll-item "
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-green-500 to-teal-500 opacity-50"></div>
          {/* Hover Content */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-purple-600 to-red-700 bg-opacity-50 transform translate-y-full group-hover:translate-y-0 transition duration-500">
            <div className="absolute inset-0  justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-500">
              <h2 className="text-xl font-bold text-white">Google Dorking</h2>
              <p className="text-white text-[13px]">This is a website named Google Dorking. this is useful for Cyber security learners.
              Fuly created with HTML, CSS, Javascript, Tailwind css and React js. this is fullu responsive and animated.
              </p>
              <a href="https://googledorking.netlify.app/" className="text-sm text-white underline mt-2">View Project</a>
            </div>
          </div>
        </div>
        </div>

        {/* Project 3 */}
        <div className="flex justify-center lg:flex-none" >
        <div
          className="group relative w-72 h-48 intern  rounded-xl shadow-lg overflow-hidden scroll-item "
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 via-blue-500 to-sky-900 opacity-50"></div>
          {/* Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-purple-600 to-red-700 bg-opacity-50 transform translate-y-full group-hover:translate-y-0 transition duration-500">
            <div className="absolute inset-0 justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-500">
              <h2 className="text-xl font-bold text-white">Tech Edufy</h2>
              <p className="text-white">This is a institute website.I was created my home page of the website during my intern
                and its fully created by HTML, CSS, Tailwind css and Javascript.
              </p>
              <a href="https://websitetechedufy.netlify.app/" className="text-sm text-white underline mt-2">View Project</a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
