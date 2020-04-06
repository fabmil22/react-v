import React from 'react';
import { connect } from 'react-redux';
import playIcon from '../assets/img/play-icon.png';
import plusIcon from '../assets/img/plus-icon.png';
import { setFavorite } from '../actions';
const ItemCarrusel = (props) => {
  const {cover , title , year , contentRating , duration} = props;

  const handleSetFavorite = () => {
    props.setFavorite(
      {cover , title , year , contentRating , duration})
      }

    return ( 
        <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt=""  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={playIcon} alt="Play Icon"/> 
            <img 
            className="carousel-item__details--img"
             src={plusIcon}
             alt="Plus Icon"
              onClick={handleSetFavorite}
              /> 
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
    <p className="carousel-item__details--title">{title}</p>
    <p className="carousel-item__details--subtitle">{year} {duration} {contentRating}</p>
=======
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{year}+{duration}</p>
>>>>>>> f26e5181b2accb538b44587781c8a94630038e78
=======
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{year}+{duration}</p>
>>>>>>> master
        </div>
      </div>
     );
}
 
const mapDispatchToProsps  = {
  setFavorite,
}

export default  connect(null , mapDispatchToProsps )(ItemCarrusel);