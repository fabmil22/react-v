import React from 'react';
const Carrusel = ({children}) => {
    return ( 

        <section className="carousel">
        <div className="carousel__container">
            {children}
            </div>
            </section>

     );
}
 
export default Carrusel;