import React from "react";
import { useHistory } from 'react-router-dom'

export const ViewProducts = ({article}) => {
  const history = useHistory();
  const handleSeeMore = () =>{
    history.push(`/screens/especificProduct/${article.id}`);
  }
  return (
    <div className="tarjet">
      <div className="generalInfo">
        <img
          className="product-image"
          src={article.image}
          alt=""
        />
        <h4>{article.productName.substr(0,15)}</h4>
        <span>{article.descripcionCorta.substr(0,15)}</span>
      </div>
      <div className="seeMore">
        <span onClick={handleSeeMore}>See more</span>
      </div>
    </div>
  );
};
