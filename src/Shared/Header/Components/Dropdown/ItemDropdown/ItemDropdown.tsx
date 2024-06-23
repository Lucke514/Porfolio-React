import { Link } from "react-router-dom";

interface ItemDropdownProps {
    isSelected: boolean;
    text: string;
    link: string;
    event: (e: any) => void;
}

export default function ItemDropdown({ isSelected, text, link, event }: ItemDropdownProps) {
    return (
        <li>
            <Link to={`/${link}`} id={link} className={`block w-40 p-2 hover:bg-red-400 hover:ring-1 hover:ring-red-500 hover:text-white rounded-lg transition duration-300 text-black ${isSelected ? 'bg-red-700 text-white' : ''}`} onClick={event}>{text}</Link>
        </li>
    );
}