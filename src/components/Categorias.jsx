import React from 'react';
import '../assets/style/Categoria.scss';

const Categorias = ({children , title}) => {
    return ( 

        <div>
              <h3 className="categories__title">{title}</h3>
              {children}
        </div>
     );
}
 
export default Categorias;