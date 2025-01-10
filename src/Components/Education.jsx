import "./Styles/Animation.css";

export function Education() {
  return (
    <div id="education" className="pt-10 pb-14 ">
      <div className="border border-red-300 shadow-lg mx-10 my-10">
      <p className="flex justify-center font-semibold text-xl ">Education</p>
      <div className="max-w-screen-lg  mx-20  side-fade-in flex ">
        <div className="w-1/2 px-5 py-10">
          <img className="w-96 h-96 rounded-2xl scroll-left" src="./src/assets/image/Education.webp"></img>
        </div>
        <div className="w-1/2 pt-10 scroll-bottom">
          <ul>
            <li className="text-3xl font-sans text-red-950 font-semibold">Degree</li>
            <li className="pt-2 text-2xl">Bachelor of Computer Application</li>
            <li className="pt-1 font-semibold text-slate-600">H. H The Rajah's College Pudukkottai</li>
          </ul>
          <ul>
            <li className="text-3xl font-sans text-red-950 font-semibold pt-8">Certification</li>
            <li className="pt-2 text-2xl">HTML, CSS & JavaScript</li>
            <li className="pt-1 font-semibold text-slate-600">GUVI</li>
            <li className="pt-2 text-2xl">Core Python</li>
            <li className="pt-1 font-semibold text-slate-600">Besant Technology</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
