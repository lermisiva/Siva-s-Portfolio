import "./Styles/Animation.css";

export function About() {
  return (
    <div id="about" className="pt-14 pb-14">
      <div className="border border-red-300 shadow-lg mx-10 my-10">
      <p className="flex justify-center font-semibold text-xl">About Me</p>
      <div className="w-[1200px]  mx-20  side-fade-in flex ">
        <div className="w-1/2 px-5 py-10">
          <img className="w-96 h-96 rounded-2xl " src="./src/assets/image/about me.webp"></img>
        </div>
        <div className="w-1/2 pt-12">
          <ul>
            <li className="p-3 font-semibold">I'm a dedicated Frontend Developer with a passion for crafting web applications that are pivotal to the overall success of the product.</li>
            <li className="p-3 font-semibold">I thoroughly enjoy the process of building web applications that seamlessly blend functionality and aesthetics, empowering users with intuitive and efficient digital experiences.</li>
            <li className="p-3 font-semibold">Outside of coding, I find joy in expressing my creativity through painting and challenging my strategic thinking with a game of chess.</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
