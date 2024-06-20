import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="flex justify-center gap-5 items-center">
            <Link to="/home" className="relative text-white cursor-pointer transition duration-300 ease-linear before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-red-500 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-red-500 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                Home
            </Link>
            
            <Link to="/about" className="relative text-white cursor-pointer transition duration-300 ease-linear before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-red-500 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-red-500 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                Acerca de
            </Link>
            
            <Link to="/projects" className="relative text-white cursor-pointer transition duration-300 ease-linear before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-red-500 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-red-500 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                Proyectos
            </Link>

            <Link to="/contact" className="relative text-white cursor-pointer transition duration-300 ease-linear before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-red-500 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-red-500 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                Contacto
            </Link>
        </nav>
    )
}

