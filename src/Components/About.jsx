import "./Styles/Animation.css";

export function About() {
  return (
    <div id="about" className="lg:pt-14 lg:pb-14 ">
      <div className="border border-red-400 shadow-lg lg:mx-10 mx-5 my-10">
      <p className="flex justify-center font-semibold text-xl ">About Me</p>
      <div className="lg:max-w-screen-lg  lg:mx-20  side-fade-in lg:flex ">
        {/*mobile view */}
        <div className="lg:w-1/2 lg:px-5 lg:py-10 pt-10 flex justify-center lg:hidden ">
          <img className="lg:w-96 lg:h-96 w-[300px] h-[300px] rounded-2xl scroll-mobile " src="/public/image/about me.webp" alt="About"></img>
        </div>
        {/*laptop view */}
        <div className="lg:w-1/2 lg:px-5 lg:py-10 pt-10 lg:block hidden">
          <img className="lg:w-96 lg:h-96 w-[300px] h-[300px] rounded-2xl scroll-left " src="/src/assets/image/about me.webp"></img>
        </div>
        <div className="lg:w-1/2 pt-12 scroll-bottom">
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
