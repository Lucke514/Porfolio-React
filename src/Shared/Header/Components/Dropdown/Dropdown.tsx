import { useEffect, useState } from "react";
import SvgDropdown from "./SvgDropdown/SvgDropdown";
import ItemDropdown from "./ItemDropdown/ItemDropdown";

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelect, setIsSelect] = useState("");

    //* -> Funcion para abrir y cerrar el dropdown
    function handleOpen(event: MouseEvent | any) {
        event.stopPropagation();
        setIsOpen(!isOpen);
    }

    //* -> Funcion para seleccionar el link actual de la url
    function selectLink() {
        const url = window.location.href;
        const urlSplit = url.split("/");

        switch (urlSplit[urlSplit.length - 1]) {
            case "home":
                setIsSelect("home");
                break;
            case "about":
                setIsSelect("about");
                break;
            case "projects":
                setIsSelect("projects");
                break;
            case "contact":
                setIsSelect("contact");
                break;
            default:
                setIsSelect("");
                break;
        }
    }

    function changeLink(e: any) {
        setIsSelect(e.target.id);
        setIsOpen(false);
    }

    //* -> Effects
    useEffect(() => {
        selectLink();
    }, []);

    function handleClose() {
        setIsOpen(false);
    }

    useEffect(() => {
        document.addEventListener('click', handleClose);
        return () => {
            document.removeEventListener('click', handleClose);
        }
    }, [isOpen]);

    return (
        <div className="relative z-10">
            <button className="flex items-center gap-2" onClick={handleOpen}>
                <SvgDropdown isOpen={isOpen} />
            </button>

            <div className={`${isOpen ? 'absolute' : 'hidden'} right-0 bg-white rounded-lg shadow-lg`}>
                <ul className="flex flex-col">
                    <ItemDropdown isSelected={isSelect == "home"} text="Home" link="home" event={changeLink} />
                    <ItemDropdown isSelected={isSelect == "about"} text="About" link="about" event={changeLink} />
                    <ItemDropdown isSelected={isSelect == "projects"} text="Projects" link="projects" event={changeLink} />
                    <ItemDropdown isSelected={isSelect == "contact"} text="Contact" link="contact" event={changeLink} />
                </ul>
            </div>
        </div>
    )
}
