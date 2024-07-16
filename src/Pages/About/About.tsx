import TechnologiesStack from "./Components/TechnologiesStack/TechnologiesStack";

export default function About() {
	return (
		<section className="px-5 items-center mt-10 sm:px-20 lg:px-44">
			<h1 className="font-bold text-5xl text-center mb-12">Acerca de mi</h1>
			<p className="text-left text-wrap mb-14 p-10" data-aos="fade-up-left">
				<span className="text-xl font-bold text-orange-500">Especialista</span> en Tecnología de la Información con certificación en <span className=" font-bold text-red-300 text-xl">Ciberseguridad</span> para sistemas de control industrial.
				Poseo una sólida experiencia en <span className="text-blue-300 font-bold text-xl">desarrollo de software</span>, complementada con habilidades en gestión de redes y soporte técnico.
				Destaco por mi enfoque proactivo en la resolución de problemas y mi dedicación a la mejora continua en el ámbito de la ciberseguridad.
				<br /><br />
				Soy un <span className="font-bold text-xl text-yellow-200">comunicador eficaz</span>, capaz de colaborar eficientemente en equipos multidisciplinarios. 
				Mi responsabilidad y compromiso con la calidad se reflejan en cada proyecto que emprendo,
				siempre con el <span className="font-bold text-xl text-green-400">objetivo</span> de fortalecer la seguridad y eficiencia de los sistemas tecnológicos.
			</p>

            <TechnologiesStack />
		</section>
	)    
}