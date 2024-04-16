export const Navbar = () => {



    return (
        <>
        <p className="bg-black text-white text-center py-1">Comunicate con 47681405</p>
        <nav className="bg-orange-500 mb-20 ">
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-white text-2xl font-bold">MiSitio</a>
                    </div>
                    {/* Links */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-white hover:text-gray-200">Inicio</a>
                        <a href="#" className="text-white hover:text-gray-200">Acerca de</a>
                        <a href="#" className="text-white hover:text-gray-200">Servicios</a>
                        <a href="#" className="text-white hover:text-gray-200">Contacto</a>
                    </div>
                    {/* Mobile Menu Button (Hamburger Icon) */}
                    <div className="flex md:hidden">
                        <button className="text-white focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar