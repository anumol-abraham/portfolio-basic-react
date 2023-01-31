import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../components/header.css";
const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick =() => setClick(!click);
    return ( 
        <div className="header">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
                <li>
                <Link to="/about"> About</Link>
                </li>
                <li>
                <Link to="/contact"> Contact</Link>
                   
                </li>
            </ul>
            
    </div>
    );
};
export default Header;