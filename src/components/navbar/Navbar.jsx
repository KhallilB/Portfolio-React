import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

import profileImg from '../../assets/images/profile-img.jpg';

const Navbar = () => (
    <header>
        <div className="profile-picture">
            <img src={profileImg} alt="Khallil" />
        </div>

        <nav className="active">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>

        <div class="menu">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
    </header>
)

export default Navbar;