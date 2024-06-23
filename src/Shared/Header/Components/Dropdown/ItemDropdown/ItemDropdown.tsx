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
            <Link to={`/${link}`} id={link} className={`${isSelected ? 'bg-red-400 rounded-none' : ''} block w-40 p-2 active:bg-red-400 active:ring-1 active:ring-red-500 active:text-white rounded-lg transition duration-300 text-black ${isSelected ? 'bg-red-700 text-white' : ''}`} onClick={event}>{text}</Link>
        </li>
    );
}