import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <React.Fragment>
            <main className="h-screen w-screen flex flex-col justify-center items-center">
                <img src="/img/Avatar.png" alt="Icono de avatar" className="rounded-full h-[25vh] w-[25vh] m-5" />
                <h1 className="text-5xl font-bold">
                    <span className="text-red-500">4</span>04 - <span className="text-red-500">N</span>ot Found
                </h1>
                <h2>
                    Al parecer, la página que buscas no existe.
                </h2>
                    <Link to={'/home'} className="text-white hover:animate-pulse font-bold py-2 px-4 rounded mt-5 hover:underline flex gap-2 hover:text-red-300">
                        Regresar a la página principal
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                    </Link>
            </main>
        </React.Fragment>
    )
}