import React from "react";
import { useHistory } from "react-router-dom";
import StarRating from "../starRating/StarRating";

export const ViewProducts = ({ article }) => {
  const history = useHistory();

  const handleSeeMore = () => {
    history.push(`/screens/especificProduct/${article.id}`);
  };
  return (
    <>
      {/* <div className="tarjet">
        <div className="generalInfo">
          <img className="product-image" src={article.image} alt="" />
          <h4>{article.productName}</h4>
          <span>{article.descripcionCorta}</span>
        </div>
        <div className="seeMore">
          <span onClick={handleSeeMore}>See more</span>
        </div>
      </div> */}

      <div className="cardProduct">
        <div className="card-image">
          <img
            className="card-image"
            src={`${article.image}`}
            alt=""
          />
        </div>
        <div className="card-textProduct">
          <span className="date">{article.creationDate}</span>
          <h2>{article.productName}</h2>
          <div className="descripcion">
            <span>{article.descripcionCorta}</span>
          </div>
        </div>
        <div className="nose">
          <div className="starProduct">
            <StarRating />
          </div>
          <div className="seeMoreButton">
            <span onClick={handleSeeMore}>See more</span>
          </div>
        </div>
      </div>
    </>
  );
};
