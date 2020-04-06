<<<<<<< HEAD:src/containers/App.jsx
import React from 'react';
import Header from '../components/Header';
=======
import React , { useEffect, useState} from 'react';
import { connect } from 'react-redux';
>>>>>>> f26e5181b2accb538b44587781c8a94630038e78:src/containers/Home.jsx
import Search from '../components/Search';
import Categorias from '../components/Categorias';
import Carrusel from '../components/Carrusel';
import ItemCarrusel from '../components/ItemCarrusel';
<<<<<<< HEAD:src/containers/App.jsx
import Footer from '../components/Footer';
import '../assets/style/App.scss';

import { connect } from 'react-redux';

const App = ({ mylist, trends, originals }) => {
  return (
    <div className='App'>
      <Header />
      <Search />
      {mylist?.length > 0 && (
        <Categorias title='Nuevos'>
          <Carrusel>
            <ItemCarrusel lista={trends} />
          </Carrusel>
        </Categorias>
      )}

      <Categorias title='tendencias'>
        <Carrusel>
          {trends.map((item) => (
            <ItemCarrusel key={item.id} {...item} />
          ))}
        </Carrusel>
      </Categorias>

      <Categorias title='nuevos'>
        <Carrusel>
          {originals.map((item) => (
            <ItemCarrusel key={item.id} { ...item} />
          ))}
        </Carrusel>
      </Categorias>

      <Footer />
    </div>
  );
};

const mapStateToProsp = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};
export default connect(mapStateToProsp, null)(App);
=======
import '../assets/style/Home.scss';

const Home = ({ mylist, trends, originals}) => {

  
    return ( 
        <React.Fragment>
  
        <Search />
        {
            mylist?.length > 0 && 
            <Categorias title="Nuevos">
            <Carrusel>
                <ItemCarrusel  lista={trends} />
            </Carrusel>
            </Categorias>
        }
       
            <Categorias title="tendencias">
            <Carrusel>
                { trends.map(item =>
                    <ItemCarrusel  key={item.id} {...item} />
                    )}
                
            </Carrusel>
            </Categorias>
        
            <Categorias title="tendencias">
            <Carrusel>
                { originals.map(item =>
                    <ItemCarrusel  key={item.id} {...item} />
                    )}
                
            </Carrusel>
            </Categorias>

       
       
        </React.Fragment>
     );
}
 
const mapSateToProsps = state => {
    return{
        mylist: state.mylist,
        trends: state.trends,
        originals: state.originals
    };
}
export default connect(mapSateToProsps , null)(Home);
>>>>>>> f26e5181b2accb538b44587781c8a94630038e78:src/containers/Home.jsx
