import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="flex justify-center py-10">
            <p className="text-white text-center"><Link to={'https://github.com/lucke514'} className="hover:text-red-300 transition duration-300">Lucas Gonzalez</Link> - 2024 © Todos los derechos reservados</p>
        </footer>
    )
}