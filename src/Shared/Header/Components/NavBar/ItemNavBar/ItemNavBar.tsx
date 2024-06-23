import { Link } from "react-router-dom";

interface ItemNavBarProps {
    isSelected: boolean;
    text: string;
    link: string;
    event: (e: any) => void;
}

export default function ItemNavBar({ isSelected, text, link, event }: ItemNavBarProps) {
    return (
        <Link to={link} id={`${text}-link`} className="relative text-white cursor-pointer transition duration-300 ease-linear before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-red-500 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-red-500 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]" onClick={event}>
            {text}
            {isSelected && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500"></div>}
        </Link>
    );
}
