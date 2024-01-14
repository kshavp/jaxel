const Navbar = () =>{
    return(
        <div className="block md:flex justify-between items-center p-2 m-2">
            <div className="logo">
                <h1 className="text-white text-5xl font-medium text-center md:text-left">Jaxel</h1>
            </div>
            <div className="nav-elements">
                <ul className="text-white flex gap-10 text-xl justify-center md:justify-start">
                    <li className="none"><a href="">About</a></li>
                    <li className="list-disc"><a href="">Github</a></li>
                    <li className="list-disc"><a href="">Creator</a></li>
                </ul>
            </div>
            <div className="misc flex gap-2 mr-2 justify-center md:justify-start">
                <button className="hover:opacity-[0.9] p-3 bg-purple-600 rounded-md text-white">Get Started</button>
                <button className="hover:opacity-[0.9] p-3 bg-slate-600 rounded-md text-white">Login</button>
            </div>
        </div>
    );
}

export default Navbar;