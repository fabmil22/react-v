import React from 'react';
import '../assets/style/Carrusel.scss';

const Categorias = ({children}) => {
    return ( 

        <div>
              <h3 className="categories__title">Mi lista</h3>
              {children}
        </div>
     );
}
 
export default Categorias;