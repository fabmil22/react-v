import React from 'react';
import '../assets/style/login/header.scss';
import logo  from'../assets/img/logo-platzi-video-BW2.png';

const Header_login = () => {
    return (  <header className="header">
    <img className="header__img" src={logo} alt="Platzi Video"/>
  </header>);
}
 
export default Header_login;