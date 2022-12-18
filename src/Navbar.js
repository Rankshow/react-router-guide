import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="nav-link">
            <ul>
                <li>
                    <Link className="link" to='/'>Home</Link>
                </li>
                <li>
                    <Link className="link" to='/about'>About</Link>
                </li>
                <li>
                    <Link className="link" to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link className="link" to='/error'>Error</Link>
                </li>
                <li>
                    <Link className="link" to='/people'>Product</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;