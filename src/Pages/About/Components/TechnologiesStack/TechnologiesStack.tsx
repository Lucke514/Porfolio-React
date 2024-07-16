import React from "react";

export default function TechnologiesStack() {

    const technologies = [
        {
            name: "HTML",
            icon: "/img/svg/html5.svg"
        },
        {
            name: "CSS",
            icon: "/img/svg/css3.svg"
        },
        {
            name: "Javascript",
            icon: "/img/svg/javascript.svg"
        },
        {
            name: 'PHP',
            icon: '/img/svg/php.svg'
        },
        {
            name: "Typescript",
            icon: "/img/svg/typescript.svg"
        },
        {
            name: "NodeJS",
            icon: "/img/svg/nodejs.svg"
        },
        {
            name: "React",
            icon: "/img/svg/react.svg"
        },
        {
            name: 'Java',
            icon: '/img/svg/java.svg'
        },
        {
            name: "Python",
            icon: "/img/svg/python.svg"
        },
        {
            name: "Go",
            icon: "/img/svg/go.svg"
        },
        {
            name: "Docker",
            icon: "/img/svg/docker.svg"
        },
        {
            name: "Git",
            icon: "/img/svg/git.svg"
        },
        {
            name: "MySQL",
            icon: "/img/svg/mysql.svg"
        },
        {
            name: 'Firebase',
            icon: '/img/svg/firebase.svg'
        },
        {
            name: 'Postman',
            icon: '/img/svg/postman.svg'
        },
        {
            name: "Linux",
            icon: "/img/svg/linux.svg"
        }
    ]

    return (
        <React.Fragment>
            <h2 className="text-center text-3xl font-extrabold mb-4">Stack Tecnológico</h2>
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-infinite-scroll">
                    {technologies.map((technology, index) => (
                        <li key={index} className="mx-4">
                            <img src={technology.icon} alt={technology.name} className="h-14 w-14 md:h-16 md:w-16" />
                        </li>
                    ))}
                    
                    {technologies.map((technology, index) => (
                        <li key={index} className="mx-4">
                            <img src={technology.icon} alt={technology.name} className="h-14 w-14 md:h-16 md:w-16" />
                        </li>
                    ))}
                </ul>
            </div>
        </React.Fragment>
    )
}