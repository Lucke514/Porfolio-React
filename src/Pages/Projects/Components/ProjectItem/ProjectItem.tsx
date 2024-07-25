export default function ProjectItem() {
    return (
        <article className="flex flex-col max-w-52 max-h-52 shadow-md shadow-white p-2">
            <header className="header-item_project">
                <img src="https://lucke.cl/img/FarmaciaIcon.png" alt="Imagen Lagarto" className="h-20 w-20 mx-auto"/>
            </header>
            <main className="overflow-auto">
                <h1 className="font-extrabold text-center">Itury</h1>
                <p>
                    Itury es un software web desarrollado para la gestión de entrega de medicamentos en el hospital
                    Doctor Antonio Tirado Lanas de Ovalle, Chile.

                    Este software permite a los funcionarios del hospital gestionar la entrega de medicamentos a los
                    pacientes, llevando un registro de los medicamentos entregados, los pacientes a los que se les ha
                    entregado y los funcionarios que han realizado la entrega.
                </p>
            </main>
            <footer>
                <button className="py-2 px-4 bg-purple-900 rounded-lg ring-1 ring-black hover:ring-purple-700 hover:bg-purple-600 transition duration-300 ease-linear">
                    Ver Repositorio
                </button>
            </footer>
        </article>
    )
}