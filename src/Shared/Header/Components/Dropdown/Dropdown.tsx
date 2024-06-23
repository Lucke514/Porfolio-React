import { useState } from "react";
import ItemDropdown from "./ItemDropdown/ItemDropdown";
import SvgDropdown from './SvgDropdown/SvgDropdown';

export default function Dropdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
                            <ItemDropdown text="Inicio" link="home" isSelected={false} event={() => setIsDropdownOpen(false)} />
                        </ul>
                    </div>
                )}
            </div>
        </main>
    );
}