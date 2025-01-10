import "./Styles/Animation.css";

export function Experience() {
  return (
    <div id="experience" className="pt-56 pb-14">
     < p className="flex justify-center font-semibold text-xl">Experience</p>
      <div className="justify-center flex
      
      ">
      
      <div className="w-[900px]  mx-20  side-fade-in flex  border border-red-300 shadow-lg  my-10">
        <div className="w-1/2 px-5 py-10">
          <img className="w-60 h-60 rounded-2xl" src="/image/cocoonsoftware_logo.png"></img>
        </div>
        <div className="w-1/2 pt-12">
          <ul>
            <li className=" font-semibold text-2xl">Front-End Developer Intern</li>
            <li className="p-1 font-semibold text-xl text-slate-700">Cocoon Software</li>
            <li className="py-2 font-semibold">Contributed to building a responsive website using HTML, Tailwind CSS, and JavaScript. Created clean, user-friendly designs optimized for mobile devices.</li>
            <li></li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
