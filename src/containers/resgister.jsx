import React from 'react'
import { Link } from 'react-router-dom';
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
        <Link  to="login"><a >Iniciar sesión</a></Link>
        </section>
  </section>
  
  </div>
    )
}
