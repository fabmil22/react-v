import React , { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categorias from '../components/Categorias';
import Carrusel from '../components/Carrusel';
import ItemCarrusel from '../components/ItemCarrusel';
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