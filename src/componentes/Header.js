import React from "react";
import './Header.css';
import logo_netflix from '../img/logo-netflix.png'
import logo_usuario from '../img/logo-usuario.png'

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={logo_netflix} alt="logo-netflix"/>
                </a>
            </div>
            <div className="header--user">
                <img src={logo_usuario} alt="logo-usuario" />
            </div>
        </header>
    );
}