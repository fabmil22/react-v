import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categorias from '../components/Categorias';
import Carrusel from '../components/Carrusel';
import ItemCarrusel from '../components/ItemCarrusel';
import Footer from '../components/Footer';
import '../assets/style/App.scss';

const App = () => {
    return ( 
        <div  className="App">
        <Header />
        <Search />
        <Categorias>
            <Carrusel>
                <ItemCarrusel />
            </Carrusel>
        </Categorias>
        <Footer/>
        </div>
     );
}
 
export default App;