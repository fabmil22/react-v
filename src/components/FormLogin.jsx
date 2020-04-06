import React from 'react'
import iconGoogle  from'../assets/img/google-icon.png';
import iconTwitter  from'../assets/img/twitter-icon.png';
import { Link } from 'react-router-dom';
const FormLogin = () => {
    return (
    <section className="login">
        <section className="login__container">
            <h2>Inicia sesión</h2>
            <form className="login__container--form">
                <input className="input" type="text" placeholder="Correo" />
                <input className="input" type="password" placeholder="Contraseña" />
                <button className="button">Iniciar sesión</button>
                <div className="login__container--remember-me">
                <label>
                    <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
                </label>
                <a href="/">Olvidé mi contraseña</a>
                </div>
            </form>
            <section className="login__container--social-media">
                <div><img src={iconGoogle} /> Inicia sesión con Google</div>
                <div><img src={iconTwitter} /> Inicia sesión con Twitter</div>
            </section>
            <p className="login__container--register">No tienes ninguna cuenta <Link to="register"><a href="">Regístrate</a></Link></p>
        </section>
  </section>
    )
}

export default FormLogin
