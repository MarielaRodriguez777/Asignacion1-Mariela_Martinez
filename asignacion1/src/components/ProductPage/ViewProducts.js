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
        <h4>{article.productName}</h4>
        <span>{article.descripcionCorta}</span>
      </div>
      <div className="seeMore">
        <span onClick={handleSeeMore}>See more</span>
      </div>
    </div>
  );
};
