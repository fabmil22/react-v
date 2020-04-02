import React from 'react'

class Header  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
<header className="header">
    <img className="header__img" src="../assets/img/logo-platzi-video-BW2.png" alt="Platzi Video"/>
    <div className="header__menu">
        <div className="header__menu--profile">
            <img src="../assets/img/user-icon.png" alt=""/>
            <p>Perfil</p>
        </div>
        <ul>
            <li><a href="/">Cuenta</a></li>
            <li><a href="/">Cerrar Sesión</a></li>
        </ul>
        </div>
  </header>

         );
    }
}
 
export default  Header;