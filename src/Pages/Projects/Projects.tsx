import ProjectItem from "./Components/ProjectItem/ProjectItem";

export default function Projects() {
    return (
        <main className="px-20 py-5">
            <h1 className="text-4xl font-bold text-center mb-5">
                <span className="text-red-500">P</span>royec<span className="text-red-500">t</span>os
            </h1>
            <h2 className="text-2xl text-center font-bold">
                Puedes revisar mis proyectos en sus respectivos repositorios de GitHub o en sus respectivas páginas web.
            </h2>

            <ProjectItem />
        </main>
    )
}