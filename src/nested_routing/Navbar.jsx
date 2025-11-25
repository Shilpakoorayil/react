import React, { useState } from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
        <nav>
            {/* Logo */}

            <NavLink to='/' className="logo">
                {/* INORDER TO GIVE ACTIVE STYLE */}

                My Website
            </NavLink>


            {/* Hamburger menu icon */}
            <div className='menu-icon' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* nav link */}
            <ul className={menuOpen ? 'show' : ''}>
                {/* ...............Home Page.............. */}
                <li>
                    <NavLink
                        to='/'
                        end
                        className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={() => setMenuOpen(false)}
                    >


                        Home
                    </NavLink>
                </li>
                {/* ...........About Page.............. */}
                <li>
                    <NavLink
                        to='/about'
                        end
                        className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={() => setMenuOpen(false)}
                    >


                        About
                    </NavLink>
                </li>
                {/* ............Services.................. */}
                <li>
                    <NavLink
                        to='/services'
                        end
                        className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={() => setMenuOpen(false)}
                    >


                        Services
                    </NavLink>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar
