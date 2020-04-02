import React from 'react';
import '../assets/style/Header.scss';
import logo  from'../assets/img/logo-platzi-video-BW2.png';
import icon from '../assets/img/user-icon.png';
const Header = () => {
    return ( <header className="header">
    <img className="header__img" src={logo} alt="Platzi Video"/>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={icon} alt=""/>
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header> );
}
 
export default Header;
