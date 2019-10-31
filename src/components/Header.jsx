import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/mascota.png';
import userIcon from '../assets/static/user-icon.png';

const Header =()=>(
    
    <header className="header">
    <img className="header_img" src={logo}alt="Instituciones" />
    <head className="head">
         <a href="http://localhost/sinap__/public/video/SINAP.mp4">Videos</a>
         <a href="/">Realizar Tramite</a>
    </head>
    <div className="header_menu">
      <div className="header_menu--perfil">
         <img src={userIcon} alt=""/>
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">cerrar Sesión</a></li>
      </ul>

     
    </div>
  </header>

);

export default Header;
