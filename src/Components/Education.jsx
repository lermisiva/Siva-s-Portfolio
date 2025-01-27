import "./Styles/Animation.css";

export function Education() {
  return (
    <div id="education" className="pt-10 pb-14 text-gray-300">
      <div className="border border-slate-300 shadow-lg lg:mx-10 mx-5 my-10">
      <p className="flex justify-center font-semibold text-xl scroll-right text-blue-300 ">Education</p>
      <div className="max-w-screen-lg  lg:mx-20  side-fade-in lg:flex ">
        {/*mobile view */}
        <div className="lg:w-1/2 lg:px-5 lg:py-10 pt-10 flex justify-center lg:hidden ">
          <img className="lg:w-96 lg:h-96 w-[300px] h-[300px] rounded-2xl scroll-mobile" src="/image/Education.png"></img>
        </div>
          {/*laptop view */}
        <div className="lg:w-1/2 lg:px-5 lg:py-10 pt-10 lg:block hidden">
          <img className="lg:w-96 lg:h-96 w-[300px] h-[300px] rounded-2xl scroll-left" src="/image/Education.png"></img>
        </div>
        <div className="lg:w-1/2 lg:pt-10 py-10 lg:py-0 px-5 lg:px-10 scroll-bottom">
          <ul>
            <li className="lg:text-3xl text-2xl font-sans text-green-300 font-semibold">Degree</li>
            <li className="pt-2 lg:text-2xl text-xl ">Bachelor of Computer Application</li>
            <li className="pt-1 font-semibold text-orange-200">H. H The Rajah's College Pudukkottai</li>
          </ul>
          <ul>
            <li className="lg:text-3xl text-2xl font-sans text-green-300 font-semibold pt-8">Certification</li>
            <li className="pt-2 lg:text-2xl text-xl">HTML, CSS & JavaScript</li>
            <li className="pt-1 font-semibold text-orange-300">GUVI</li>
            <li className="pt-2 lg:text-2xl text-xl">Core Python</li>
            <li className="pt-1 font-semibold text-orange-300">Besant Technology</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
