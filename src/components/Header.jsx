import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/Header.scss';
import logo  from'../assets/img/logo-platzi-video-BW2.png';
import icon from '../assets/img/user-icon.png';
const Header = () => {
    return ( <header className="header">
      <Link to="/">
      <img className="header__img" src={logo} alt="Platzi Video"/>
      </Link>
    
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={icon} alt=""/>
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/login">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header> );
}
 
export default Header;
