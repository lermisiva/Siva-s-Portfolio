import "./Styles/Home.css"; // Import the CSS file

export function Home() {
  return (
    <div id="home" className="pb-28">
      <div className="flex justify-center h-full pt-[200px]">
        <div className="text-2xl font-sans">
          <div className="animate-typing lg:text-4xl text-[20px]">
            Hi, Welcome to My Portfolio this is{" "}
            <span className="lg:text-7xl text-sm text-orange-950 font-semibold mx-2 font-mono">
              SIVABALAN S .
            </span>
          </div>
          <span className=""></span>
        </div>
      </div>

      <div className="flex justify-center h-full mt-5">
        <div className="text-2xl font-sans">
          <div className="animate-typing lg:text-2xl text-sm">
            Front End Developer
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-center">
       <a className="p-2 rounded-2xl border border-red-950 bg-red-950 font-semibold text-red-300 hover:bg-red-300 hover:text-red-950" href="./src/assets/Sivabalan Resume.pdf" download={"Sivabalan.pdf"}>Resume</a>
      </div>
    </div>
  );
}
