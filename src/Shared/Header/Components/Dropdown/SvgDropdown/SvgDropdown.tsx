import React from "react";

interface SvgDropdownProps {
    isOpen : boolean;
}
 
export default function SvgDropdown({isOpen} : SvgDropdownProps) {
    //? -> Si es verdadero, devuelve el primer valor, si es falso, devuelve el segundo valor
    return (
        <React.Fragment>
            {isOpen ? <IsOpen /> : <IsClosed />}
        </React.Fragment>
    )
}

//? -> Iconos de SVG
//* Icono mientras el dropdown está cerrado
function IsClosed() { 
    return (
        <svg className="active:rotate-90 active:transition active:duration-200" width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path d="M4 6H20M7 12H17M9 18H15" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
            </g>
        </svg>
    )
}

//* Icono mientras el dropdown está abierto
function IsOpen() {
    return (
        <svg className="active:rotate-90 active:transition active:duration-200" width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path d="M6 18L18 6M6 6l12 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
            </g>
        </svg>
    )
}