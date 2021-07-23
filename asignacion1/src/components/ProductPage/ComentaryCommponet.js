import React from "react";

export const ComentaryCommponet = ({comentario}) => {
  return (
    <div className="commentaryIndividual">
      <div className="divPhoto">
        <img src={comentario.user.photo} alt="" />
      </div>
      <div className="divComment">
        <div className="commentName">
          <h2>{comentario.user.name}</h2>
        </div> 
        <div className="commentTxt">
          <p>{comentario.comentario}</p>
        </div>
      </div>
    </div>
  );
};
