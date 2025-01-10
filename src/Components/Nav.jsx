export function Nav() {
    return <div className="" >
       <nav className="top-0 left-0 container lg:max-w-full w-screen bg-red-300 h-20 border-red-300 shadow-md border flex">
           <p className="text-red-950 ml-[20px] py-5 text-2xl lg:text-4xl font-bold ">Portfolio</p>
           <button className="text-red-950 ml-[200px] py-3 font-bold lg:hidden">Menu</button>
           <ul className="lg:flex ml-80 py-3 hidden ">
            <li className="text-red-950 font-semibold text-xl p-4">
                <a href="#home">Home</a>
            </li>
            <li className="text-red-950 font-semibold text-xl p-4">
                <a href="#about">About</a>
            </li>
            <li className="text-red-950 font-semibold text-xl p-4">
                <a href="#education">Education</a>
            </li>
            <li className="text-red-950 font-semibold text-xl p-4">
                <a href="#skills">Skills</a>
            </li>
            <li className="text-red-950 font-semibold text-xl p-4">Experience</li>
            <li className="text-red-950 font-semibold text-xl p-4">Projects</li>
            <li className="text-red-950 font-semibold text-xl p-4">Contact</li>
           </ul>
           
       </nav>
    </div>
}