import React from 'react';
import { NavLink } from 'react-router-dom';
import useActiveTab from '../hooks/userActiveTabs';

function Header() {
    const isActiveTab = useActiveTab();

    return (
        <header className="bg-neutral-900 p-4 backdrop-blur">
            <nav className="flex justify-around">
                <NavLink 
                    to="/" 
                    className={`p-2 text-white ${isActiveTab('/') ? 'border-b-2 border-orange-500' : ''}`}
                >
                    Accueil
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={`p-2 text-white ${isActiveTab('/about') ? 'border-b-2 border-orange-500' : ''}`}
                >
                    À propos
                </NavLink>
                <NavLink 
                    to="/experience" 
                    className={`p-2 text-white ${isActiveTab('/experience') ? 'border-b-2 border-orange-500' : ''}`}
                >
                    Expérience
                </NavLink>
                <NavLink 
                    to="/portfolio" 
                    className={`p-2 text-white ${isActiveTab('/portfolio') ? 'border-b-2 border-orange-500' : ''}`}
                >
                    Portfolio
                </NavLink>
                <NavLink 
                    to="/contact" 
                    className={`p-2 text-white ${isActiveTab('/contact') ? 'border-b-2 border-orange-500' : ''}`}
                >
                    Contact
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
