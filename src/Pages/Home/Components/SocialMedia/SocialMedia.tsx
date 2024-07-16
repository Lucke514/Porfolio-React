import { Link } from "react-router-dom";

import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function SocialMedia() {
    

    return (
        <section className="flex gap-2 mt-2">
            <Link to="https://linkedin.com/in/lucas-gonzalez-espinosa-073bba248/" className="flex rounded-3xl bg-gray-400/35 hover:opacity-80 p-2 gap-1 group transition-all duration-300 hover:animate-pulse">
                <FaLinkedinIn className="h-6 w-6 group-hover:fill-red-500"/>
                <h2 className="text-lg group-hover:block transition ease-linear duration-300">LinkedIn</h2>
            </Link>

            <Link to="https://github.com/lucke514" className="flex rounded-3xl bg-gray-400/35 hover:opacity-80 p-2 gap-1 group transition-all duration-300 hover:animate-pulse">
                <FiGithub className="h-6 w-6 group-hover:fill-red-500"/>
                <h2 className="text-lg group-hover:block transition ease-linear duration-300">GitHub</h2>
            </Link>

            <Link to="https://x.com/Luckeee10" className="flex rounded-3xl bg-gray-400/35 hover:opacity-80 p-2 gap-1 group transition-all duration-300 hover:animate-pulse">
                <RiTwitterXLine className="h-6 w-6 group-hover:fill-red-500"/>
                <h2 className="text-lg group-hover:block transition ease-linear duration-300">Twitter</h2>
            </Link>
        </section>
    )
}