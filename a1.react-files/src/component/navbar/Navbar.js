import React from 'react';
import "./navbar.css";
import {Link, NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul className="navLink">
                <li><NavLink to="/login" exact>Login</NavLink></li>
                <li><Link to="/login">|</Link></li>
                <li><NavLink to="/register">Register</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
