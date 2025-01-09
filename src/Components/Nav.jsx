export function Nav() {
    return <div className="" >
       <nav className="fixed top-0 left-0 container max-w-full bg-red-300 h-20 border-red-300 shadow-md border ">
           <ul className="lg:flex  justify-center hidden ">
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
           <p className="text-red-950 ml-[250px] py-3 font-bold lg:hidden">Menu</p>
       </nav>
    </div>
}