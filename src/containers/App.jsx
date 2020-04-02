import React , { useEffect, useState} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categorias from '../components/Categorias';
import Carrusel from '../components/Carrusel';
import ItemCarrusel from '../components/ItemCarrusel';
import Footer from '../components/Footer';
import '../assets/style/App.scss';

const App = () => {

   const [ videos , setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
   }
       
   );

   useEffect(() => {
       
    fetch(' http://localhost:3000/initalState')
    .then(response => response.json())
    .then( data => setVideos(data))
    }, [] );



    return ( 
        <div  className="App">
        <Header />
        <Search />
        {
            videos.mylist?.length > 0 && 
            <Categorias title="Nuevos">
            <Carrusel>
                <ItemCarrusel  lista={videos.trends} />
            </Carrusel>
            </Categorias>
        }
       
            <Categorias title="tendencias">
            <Carrusel>
                { videos.trends.map(item =>
                    <ItemCarrusel  key={item.id} {...item} />
                    )}
                
            </Carrusel>
            </Categorias>
        
            <Categorias title="tendencias">
            <Carrusel>
                { videos.originals.map(item =>
                    <ItemCarrusel  key={item.id} {...item} />
                    )}
                
            </Carrusel>
            </Categorias>

       
        <Footer/>
        </div>
     );
}
 
export default App;