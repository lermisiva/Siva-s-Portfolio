import "./Styles/Animation.css";

export function Experience() {
  return (
    <div id="experience" className="pt-56 pb-14">
      < p className="flex justify-center font-semibold text-xl">Experience</p>
      <div className="justify-center flex
      
      ">

        <div className="lg:w-[900px] max-w-screen-lg lg:mx-20 mx-10  side-fade-in lg:flex  border border-red-300 shadow-xl  my-10">
          {/*Mobile View*/}
          <div className="lg:w-1/2 px-5 py-10 flex justify-center">
            <img className="w-60 h-60 rounded-2xl scroll-mobile" src="/image/cocoonsoftware_logo.png"></img>
          </div>
            {/*Laptop View*/}
          <div className="lg:w-1/2 pt-12 scroll-bottom">
            <ul>
              <li className="lg:text-3xl text-2xl font-sans text-red-950 font-semibold">Front-End Developer Intern</li>
              <li className="pt-1 font-semibold text-slate-600">Cocoon Software</li>
              <li className="py-2 font-semibold">Contributed to building a responsive website using HTML, Tailwind CSS, and JavaScript. Created clean, user-friendly designs optimized for mobile devices.</li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
