import React from 'react';

const Experience = React.forwardRef((props, ref) => {
    const experience = [
        {
            company: 'Compagnie fictive 1',
            position: 'Ingénieur Logiciel',
            startDate: 'Janvier 2018',
            endDate: 'Présent',
            description: 'En tant qu\'ingénieur logiciel chez cettee compagnie, je suis responsable de la conception, du développement et de la maintenance de solutions logicielles hautement performantes. J\'ai également un rôle actif dans l\'analyse des besoins des clients et la proposition de solutions innovantes pour répondre à leurs exigences.',
        },
        {
            company: 'Comnpagnie fictive 2',
            position: 'Développeur Web',
            startDate: 'Juin 2015',
            endDate: 'Décembre 2017',
            description: 'Chez cette corporation, j\'ai contribué au développement de plusieurs projets web en utilisant des technologies modernes telles que React, Node.js et MongoDB. J\'ai travaillé en étroite collaboration avec les équipes de conception pour créer des interfaces utilisateur intuitives et réactives.',
        },
    ];    

    return (
        <div ref={ref} className="container mx-auto p-4">
           <h1 className="text-3xl text-white font-bold mb-8 text-center relative hover:text-gray-600 transition-transform transform-gpu hover:scale-105">
            Expérience professionnelle
            <span className="block h-1 w-1/2 bg-gradient-to-r from-gray-700 via-red-800 to-brown-500 mt-2 mx-auto transition-all hover:w-3/4"></span>
            </h1>
            <div className="space-y-8">
                {experience.map((job) => (
                    <div key={job.company} className="bg-white p-4 rounded-lg shadow-md flex">
                        <div className="w-1/4 p-2 border-r">
                            <h2 className="text-xl font-bold mb-2">{job.company}</h2>
                            <p className="text-gray-600">{job.position}</p>
                            <p className="text-gray-600">{job.startDate} - {job.endDate}</p>
                        </div>
                        <div className="w-3/4 p-2">
                            <p>{job.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default Experience;
