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
            <Link 
                to={`/${link}`} 
                id={link} 
                className={`block p-2 w-40 h-full hover:bg-red-500 hover:ring-1 hover:ring-red-500 hover:text-white rounded-lg text-black ${isSelected ? 'bg-red-700 text-white rounded-none' : ''}`} 
                onClick={event}
            >
                {text}
            </Link>
        </li>
    );
}
