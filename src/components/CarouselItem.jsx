import React from 'react';
import ProTypes from 'prop-types';

import '../assets/styles/components/CarouselItem.scss';

import playIcon  from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
//{pasar los elementos que necesito}
const CarouselItem = ({cover,title,year,contentRating,duration}) => (

    <div className="carousel-item">
        <img className="carousel-item_img" src={cover} alt={title} />
        <div className="carousel-item_details">
          
          <p className="carousel-item_details--title">{title}</p>
          <p className="carousel-item_details--subtitle">
          {`${year} 
          ${contentRating} 
          ${duration}`}
          </p>
        </div>
    </div>

);
//creamos las validaciones
CarouselItem.proTypes={
  cover : ProTypes.string,
  title : ProTypes.string,
  year: ProTypes.number,
  contentRating : ProTypes.string,
  duration: ProTypes.number,


}

export default CarouselItem;