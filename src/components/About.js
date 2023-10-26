import React from 'react';
import profileImage from '../images/profile.jpg';

const About = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="flex p-10 bg-gray-200 rounded-lg shadow-2xl">
      <div className="w-2/3 p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800">À propos de moi</h1>
        <p className="text-lg text-gray-600 mt-4">
          Bonjour, je m'appelle Jamil M. et je suis présentement un étudiant dans le programme AEC Programmeur analyste du Collège Lasalle.
          Voici mon portfolio qui contient mes projets que j'ai réalisé durant mon parcours scolaire.
          Je suis passionné par la programmation et je suis toujours à la recherche de nouveaux défis.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Informations personnelles</h2>
        <ul className="list-decimal list-inside mt-2">
          <li className="text-lg text-gray-600">Nom : Jamil M</li>
          <li className="text-lg text-gray-600">Lieu : Montréal, Québec, Canada</li>
          <li className="text-lg text-gray-600">Email : jamilm@protonmail.com</li>
        </ul>
      </div>
      <div className="w-1/3 p-4 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg">
          <img src={profileImage} alt="Profile" className="w-40 h-40 rounded-full border-4 border-gray-800 shadow-lg" />
        </div>
      </div>
    </div>
  );
});

export default About;
