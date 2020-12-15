import React,{useState} from 'react';
import {Link} from 'react-router-dom';
//import icon
import { FaBars , FaTimes  } from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io";
//import style
import './Header.scss';

function Header() {

    const [active, setActive] = useState(false);

    return (
        <>
        <div className="header">
            <div className="navbar">
                <div className="icon">{active ? <FaTimes onClick={() => setActive(!active)} className="icon-times" /> : <FaBars onClick={() => setActive(!active)} className="icon-bars" />}</div>
                <ul className="navbar-menu">
                    <li className="navbar-menu-item"><Link className="navbar-link" to="/">Home</Link></li>
                    <li className="navbar-menu-item"><Link className="navbar-link" to="/About">About</Link></li>
                    <li className="navbar-menu-item"><Link className="navbar-link" to="/Skills">Skills</Link></li>
                    <li className="navbar-menu-item"><Link className="navbar-link" to="/Contact">Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-title">
                <Link to="/" className="navbar-title-link">
                    <h5>WEB DEVELOPER</h5>
                    <IoLogoJavascript className="js" />
                </Link>
            </div>
        </div>
        <div onClick={() => setActive(false)} className={`overlay ${(active) ? "overlay-active" : ""}`}></div>
        <div className={`navbar-res ${(active) ? "menu-res-active" : ""}`}>
            <div className="navbar-res-img">
                <div className="img-pro">
                <img src="./svg/header-pic.svg" alt="profile-img" width="150px" height="150px" />
                </div>
            </div>
            <div className="navbar-res-menu">
                <ul>
                    <li><Link onClick={() => setActive(false)} className="navbar-link" to="/">Home</Link></li>
                    <li><Link onClick={() => setActive(false)} className="navbar-link" to="/About">About</Link></li>
                    <li><Link onClick={() => setActive(false)} className="navbar-link" to="/Skills">Skills</Link></li>
                    <li><Link onClick={() => setActive(false)} className="navbar-link" to="/Contact">Contact</Link></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Header
