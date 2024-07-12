//? Imports ->
import { useEffect, useState } from "react";
import ItemNavBar from "./ItemNavBar/ItemNavBar";

export default function Navbar() {
    const [isSelect, setIsSelect] = useState("");

    //* -> Functions
    function selectLink() {
        const url = window.location.href;
        const urlSplit = url.split("/");

        switch(urlSplit[urlSplit.length - 1]) {
            case "home":
                setIsSelect("home-link");
                break;
            case "about":
                setIsSelect("about-link");
                break;
            case "projects":
                setIsSelect("projects-link");
                break;
            case "contact":
                setIsSelect("contact-link");
                break;
            default:
                setIsSelect("");
                break;
        }
    }

    //! -> Events
    //* Evento para cambiar el link seleccionado dependiendo de la URL
    function changeLink(e: any) {
        setIsSelect(e.target.id);
    }

    //? -> UseEffect
    useEffect(() => {
        selectLink();
    })

    //? -> Render
    return(
        <nav className="flex justify-center gap-5 items-center">
            <ItemNavBar isSelected={isSelect === "home-link" || isSelect === ""} text="Inicio" link="home" event={changeLink}/>
            
            <ItemNavBar isSelected={isSelect === "about-link"} text="Sobre mí" link="about" event={changeLink}/>
            
            <ItemNavBar isSelected={isSelect === "projects-link"} text="Proyectos" link="projects" event={changeLink}/>

            <ItemNavBar isSelected={isSelect === "contact-link"} text="Contacto" link="contact" event={changeLink}/>
        </nav>
    )
}

