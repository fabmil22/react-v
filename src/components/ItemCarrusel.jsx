import React from 'react';
import playIcon from '../assets/img/play-icon.png';
import plusIcon from '../assets/img/plus-icon.png';
const ItemCarrusel = ( {cover , title , year , contentRating , duration}) => {
    return ( 
        <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt=""  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={playIcon} alt="Play Icon"/> 
            <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon"/> 
          </div>
    <p className="carousel-item__details--title">{title}</p>
    <p className="carousel-item__details--subtitle">{year}+{duration}</p>
        </div>
      </div>
     );
}
 
export default ItemCarrusel;