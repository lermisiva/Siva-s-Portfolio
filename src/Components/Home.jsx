import "./Styles/Animation.css"; // Import the CSS file

export function Home() {
  return (
    <div id="home" className="lg:pb-28 min-h-screen pt-40">
      {/* Main Header */}
      <div className="lg:flex justify-center items-center h-full pt-[50px] hidden">
        <div className="text-2xl font-sans">
          <div className="animate-typing lg:text-4xl">
            Hi, Welcome to My Portfolio this is{" "}
            <span className="lg:text-7xl text-sm text-orange-950 font-extralight mx-2 font-mono">
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
            <span className="lg:text-7xl text-normal text-orange-950 font-extralight mx-2 font-mono">
             SIVABALAN S .
            </span>
          </div>
        </div>
      </div>

      {/* Subheader */}
      <div className="flex justify-center items-center h-full lg:mt-5">
        <div className="text-2xl font-sans">
          <div className="animate-typing lg:text-2xl text-sm text-slate-700">
            Front End Developer
          </div>
        </div>
      </div>

      {/* Resume Button */}
      <div className="mt-5 flex justify-center">
        <a
          className="p-2 rounded-2xl border border-red-950 bg-red-950 font-semibold text-red-300 hover:bg-red-300 hover:text-red-950"
          href="/Sivabalan Resume.pdf" // Ensure the resume is in public/assets folder
          download={"Sivabalan.pdf"}
        >
          Resume
        </a>
      </div>
    </div>
  );
}
