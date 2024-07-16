import { Link } from "react-router-dom";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export default function SocialMedia() {
    return (
        <section className="flex gap-2 mt-4">
            <Link to="https://linkedin.com/in/lucas-gonzalez-espinosa-073bba248/">
                <FaLinkedinIn className="h-6 w-6 md:h-8 md:w-8 hover:fill-red-500 hover:animate-bounce"/>
            </Link>

            <Link to="https://github.com/lucke514">
                <FiGithub className="h-6 w-6 md:h-8 md:w-8 hover:fill-red-500 hover:animate-bounce"/>
            </Link>

            <Link to="https://x.com/Luckeee10">
                <RiTwitterXLine className="h-6 w-6 md:h-8 md:w-8 hover:fill-red-500 hover:animate-bounce"/>
            </Link>
        </section>
    )
}