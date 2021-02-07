import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="navbar-container">
            <a className="logo" href="/"><img src="images/Sankofa Logo.png" 
            alt="Sankofa" onClick={ closeMobileMenu }/></a>
            
            <div className="menu-icon" onClick={ handleClick }>
                <img src={click ? "images/cancel-black.png" : "images/menu-bars.png"} alt="menu icon"/>
            </div>

            <nav className={ click ? 'nav-menu active' : 'nav-menu'}>
                <ul className="links">
                    <li className="nav-links">
                        <Link to='/directory' onClick={ closeMobileMenu }>Directory</Link>
                    </li>
                    <li className="nav-links">
                        <Link to="/about-us" onClick={ closeMobileMenu }>About Us</Link>
                    </li>
                    <li className="nav-links">
                        <Link to="/regional-center" onClick={ closeMobileMenu }>Regional Center</Link>
                    </li>
                    <li className="nav-links">
                        <Link to="/testimonies" onClick={ closeMobileMenu }>Testimonies</Link>
                    </li>
                    <li className="nav-links">
                        <Link to="/growing-together" onClick={ closeMobileMenu }>Growing Together</Link>
                    </li>
                    <li className="nav-links">
                        <Link to="/resources" onClick={ closeMobileMenu }>Resources</Link>
                    </li>
                    <li className="nav-links">
                        <Link to="/contact-us" onClick={ closeMobileMenu }>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;