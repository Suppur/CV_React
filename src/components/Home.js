import React from 'react';
import backgroundImage from '../images/profile.jpg'; 

const Home = React.forwardRef((props, ref) =>{
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    return (
        <div ref={ref} className="flex justify-center items-start">
            <div
                className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm bg-cover"
                style={{ ...backgroundStyle, width: '600px', height: '500px', paddingBottom: '20px' }} 
            >
                <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
                    Projet CV React de Jamil M.
                </h1>
                <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
                    Voici un exemple de <strong className="text-stone-100">Projet React </strong>utilisant <strong className="text-stone-100">JavaScript et TailwindCSS</strong> 
                </p>
                <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
                    L'architecture composant de React simplifie la création d'applications web évolutives et maintenables, permettant la réutilisation du code et une expérience utilisateur fluide grâce à son DOM virtuel. Son écosystème riche améliore la productivité, offrant des solutions pour divers besoins de développement. React se distingue par sa flexibilité et ses performances, que ce soit pour des petits projets ou des applications d'entreprise.
                </p>


            </div>
        </div>
    );
});

export default Home;
