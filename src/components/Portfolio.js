import React from 'react';
import projimage1 from '../images/code-820275_1280.jpg';
import projimage2 from '../images/pythonsnakegame.jpg';
import projimage3 from '../images/proj3.jpg';

const Portfolio = React.forwardRef((props, ref) =>{
    return (
      <div ref={ref} className="bg-gray-100 min-h-screen rounded-lg">
        <Header />
        <Projects />
      </div>
    );
  });
  

const Header = () => (
    <div className="bg-[#DDB892] p-4 text-white text-center text-3xl font-bold rounded-t-lg">
        My Portfolio
    </div>
);  

const Projects = () => (
    <div className="p-4 rounded-b-lg">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProjectCard 
            title="Project 1 : Application de gestion de projet" 
            description="ASP.NET Core MVC application" 
            imageUrl={projimage1}
        />
        <ProjectCard 
            title="Project 2 : Application de jeux" 
            description="Jeux serpent échelle en Python avec Pygame et Pyca" 
            imageUrl={projimage2}
        />
        <ProjectCard 
            title="Projet 3 : Application statistiques de course" 
            description="Satistiques de course en Java avec JavaFX" 
            imageUrl={projimage3}
        />
        </div>
    </div>
);  

const ProjectCard = ({ title, description, imageUrl }) => (
<div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-center mb-4">{description}</p>
    <img src={imageUrl} alt={title} className="max-h-64 w-full object-cover rounded-lg" />
</div>
);
  
  


export default Portfolio;
