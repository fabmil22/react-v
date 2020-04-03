import React from 'react'

import Footer from '../components/Footer';
import '../assets/style/register/general.scss';
import Header_login from '../components/Header_login';
export default function resgister() {
    return (
        <div>
          
    <section className="register">
        <section className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form">
            <input className="input" type="text" placeholder="Nombre"/>
            <input className="input" type="text" placeholder="Correo"/>
            <input className="input" type="password" placeholder="Contraseña"/>
            <button className="button">Registrarme</button>
        </form>
        <a href="">Iniciar sesión</a>
        </section>
  </section>
  
  </div>
    )
}
