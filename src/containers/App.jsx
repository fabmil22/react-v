import React , { useEffect, useState} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categorias from '../components/Categorias';
import Carrusel from '../components/Carrusel';
import ItemCarrusel from '../components/ItemCarrusel';
import Footer from '../components/Footer';
import '../assets/style/App.scss';
import useInitialState from '../hooks/useInitialState';

const API = "http://localhost:3000/initalState";

const App = () => {
 const videoslista = useInitialState(API);
    return ( 
        <div  className="App">
        <Header />
        <Search />
        {
            videoslista.mylist?.length > 0 && 
            <Categorias title="Nuevos">
            <Carrusel>
                <ItemCarrusel  lista={videoslista.trends} />
            </Carrusel>
            </Categorias>
        }
       
            <Categorias title="tendencias">
            <Carrusel>
                { videoslista.trends.map(item =>
                    <ItemCarrusel  key={item.id} {...item} />
                    )}
                
            </Carrusel>
            </Categorias>
        
            <Categorias title="nuevos">
            <Carrusel>
                { videoslista.originals.map(item =>
                    <ItemCarrusel  key={item.id} {...item} />
                    )}
                
            </Carrusel>
            </Categorias>

       
        <Footer/>
        </div>
     );
}
 
export default App;