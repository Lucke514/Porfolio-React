import { useEffect, useState } from "react";
import ItemDropdown from "./ItemDropdown/ItemDropdown";
import SvgDropdown from './SvgDropdown/SvgDropdown';

export default function Dropdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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


    return (
        <main>
            <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="relative">
                <button id="dropdownHoverButton" className="text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center " type="button" >
                    <SvgDropdown isOpen={isDropdownOpen} />
                </button>

                {isDropdownOpen && (
                    <div
                        id="dropdownHover"
                        className="z-10 fixed right-10 divide-y bg-white rounded-lg shadow">
                        <ul aria-labelledby="dropdownHoverButton">
                            <ItemDropdown text="Inicio" link="home" isSelected={isSelect === "home-link" ? true : false} event={changeLink} />
                            <ItemDropdown text="Sobre mí" link="about" isSelected={isSelect === "about-link" ? true : false} event={changeLink} />
                            <ItemDropdown text="Proyectos" link="projects" isSelected={isSelect === "projects-link" ? true : false} event={changeLink} />
                            <ItemDropdown text="Contacto" link="contact" isSelected={isSelect === "contact-link" ? true : false} event={changeLink} />
                        </ul>
                    </div>
                )}
            </div>
        </main>
    );
}