import React ,{useEffect,useState}from "react";
import "./style/card.css";
import { FiTrash2 } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

function CardFavorit({ data }) {
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
  };
  const stars = Array(5).fill()
 
  return (
    <div className="container">
      <img className="card-img img-course" src={data.img} alt="Card image cap" />
      <div className="card-info">
        <div className="delete-icon"><FiTrash2  /></div>
        <div className="title">{data.title}</div>
        <div className="description">
          {data.description}
        </div>
        <div className="rating">
        <div className='stars-container' >
            {stars.map((_, index) => {
              return ( <FaStar key={index} size={15} color={data.stars > index ? colors.orange : colors.grey} style={{marginRight: 5}}/>)
            })}
          </div>   
        </div>
      </div>
    </div>
  );
}

export default CardFavorit;
