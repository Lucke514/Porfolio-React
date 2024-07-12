import apiLinkedIn from "../../Services/ApiLinkedIn";
import SocialMedia from "./Components/SocialMedia/SocialMedia";

export default function Home() {

    console.log(apiLinkedIn.getProfile());

    return (
        <main className="px-5 md:px-44 flex gap-x-10 items-center" data-aos="fade-right" data-aos-duration="1000">
            <section className="min-h-[67.5vh] flex-col flex justify-center">
                <h1 className="text-7xl font-bold">
                    <span className="text-red-500">L</span>ucas Gonzalez
                </h1>
                <h2 className="font-semibold sm:text-lg">
                    Desarrollador Web Full Stack
                    <span className="text-red-400"> +2 Años </span>
                    de experiencia
                </h2>
                <SocialMedia />
            </section>
            <section className="flex items-center">
                {/* Frase */}
                <h3 className="text-2xl font-semibold">
                </h3>
            </section>
        </main>
    );
}
