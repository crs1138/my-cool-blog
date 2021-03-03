import React from 'react';
import { Link } from 'gatsby';
import { navbar, navItem } from './Navbar.module.css';

const Navbar = () => (
    <nav className={navbar}>
        <ul>
            <li className={ navItem }>
                <Link to="/">Home</Link>
            </li>
            <li className={ navItem }>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
);

export default Navbar;