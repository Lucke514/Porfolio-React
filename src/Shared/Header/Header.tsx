import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Dropdown from "./Components/Dropdown";

export default function Header() {
    const [isPhone, setIsPhone] = useState(false);

    useEffect(() => {
        const mediaQuery : any = window.matchMedia('(max-width: 768px)');
        const handleMediaQuery = (e: MediaQueryListEvent) => {
            setIsPhone(e.matches);
        }

        mediaQuery.addEventListener('change', handleMediaQuery);

        handleMediaQuery(mediaQuery);

        return () => mediaQuery.removeEventListener('change', handleMediaQuery);
    }, []);

    return (
        <header className="flex justify-between px-10 py-5 items-center shadow shadow-black">
            <div>
                <img src="/img/Avatar.png" className="block rounded-full h-16 w-16" alt="Imagen de avatar" />
            </div>
            <div>
                {isPhone ? <Dropdown /> : <Navbar />}
            </div>
        </header>
    );
}
