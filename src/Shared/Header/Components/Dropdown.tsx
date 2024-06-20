import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dropdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <main>
            <div onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)} >
                <button id="dropdownHoverButton" className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center " type="button" >
                    <svg width="30px" height="30px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> 
                            <path fill="#ffffff" fillRule="evenodd" d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm0 4a1 1 0 100-2H2a1 1 0 100 2h16zm1 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 5a1 1 0 100-2H2a1 1 0 100 2h16z"></path> 
                        </g>
                    </svg>
                </button>

                {isDropdownOpen && (
                    <div
                        id="dropdownHover"
                        className="z-10 fixed right-10 divide-y bg-white rounded-lg shadow">
                        <ul aria-labelledby="dropdownHoverButton">
                            <Link to={'/home'} className="block w-40 p-2 hover:bg-red-700 hover:text-white rounded-lg transition duration-300 text-black">Home</Link>
                        </ul>
                    </div>
                )}
            </div>
        </main>
    );
}