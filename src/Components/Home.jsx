import "./Styles/Animation.css"; // Import the CSS file

export function Home() {
  return (
    <div id="home" className="lg:pb-28 min-h-screen pt-40 text-gray-300">
      {/* Main Header */}
      <div className="lg:flex justify-center items-center h-full pt-[50px] hidden">
        <div className="text-2xl font-sans">
          <div className="animate-typing lg:text-4xl">
            Hi, Welcome to My Portfolio this is{" "}
            <span className="lg:text-7xl text-sm text-orange-300 font-extralight mx-2 font-mono">
              SIVABALAN S .
            </span>
          </div>
        </div>
      </div>
      {/* Main Header Mobile view*/}
      <div className="flex justify-center items-center h-full pt-[100px] lg:hidden">
        <div className="text-2xl font-sans">
          <div className="animate-typing lg:text-4xl">
            Hi, Welcome to My Portfolio {" "}
            
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-full lg:hidden ">
        <div className="text-2xl font-sans">
          <div className="animate-typing lg:text-4xl">
            this is {" "}
            <span className="lg:text-7xl text-normal text-orange-300 font-extralight mx-2 font-mono">
             SIVABALAN S .
            </span>
          </div>
        </div>
      </div>

      {/* Subheader */}
      <div className="flex justify-center items-center h-full lg:mt-5">
        <div className="text-2xl font-sans">
          <div className="animate-typing lg:text-2xl text-sm text-red-400">
            Front End Developer
          </div>
        </div>
      </div>

      {/* Resume Button */}
      <div className="mt-5 flex justify-center scroll-bottom">
        <a
          className="p-2 rounded-2xl border text-gray-800 border-blue-200 bg-blue-200 font-semibold text-sltae-700 hover:bg-transparent hover:text-blue-300"
          href="/Sivabalan Resume.pdf" // Ensure the resume is in public/assets folder
          download={"Sivabalan.pdf"}
        >
          Resume
        </a>
      </div>
      <div className="flex justify-center mt-10 scroll-bottom">
        <ul className="flex ">
          <li className=""><a className="px-4 py-2 lg:my-0 my-4 text-orange-300 font-semibold  bg-transparent border border-orange-300 rounded-2xl mx-5
          hover:text-slate-300 hover:bg-slate-950 hover:border-slate-300" href="https://github.com/lermisiva">Github</a></li>
          <li><a className="px-3 py-2 lg:my-0 my-4 text-orange-300 font-semibold  bg-transparent border border-orange-300 rounded-2xl mx-5
          hover:text-slate-300 hover:bg-slate-950 hover:border-slate-300" href="https://www.linkedin.com/in/sivabalan-s-568ba5289/">Linked In</a></li>
          <li><a className="px-7 py-2 lg:my-0 my-4 text-orange-300 font-semibold  bg-transparent  border border-orange-300 rounded-2xl mx-5
          hover:text-slate-300 hover:bg-slate-950 hover:border-slate-300" href="mailto:sivabalan.st.2002@gmail.com">Mail</a></li>
        </ul>
      </div>
    </div>
  );
}
