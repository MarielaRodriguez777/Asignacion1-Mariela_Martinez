import React from "react";

export const ComentaryCommponet = ({ comentario }) => {
  // console.log(comentario.calificacion)
  let rowsCalificationFas = [];
    for (let i = 0; i < comentario.calificacion; i++) {
        rowsCalificationFas.push(
            <i className="fas fa-star" key={i}></i>
        )
    }
    let rowsCalificationFar = [];
    for (let i = comentario.calificacion; i < 5; i++) {
        rowsCalificationFar.push(
            <i className="far fa-star" key={i}></i>
        )
    }
  return (
    <div className="commentaryIndividual">
      <div className="divPhoto">
        <img src={comentario.user.photo} alt="" />
      </div>
      <div className="divComment">
        <div className="commentName">
          <h2>{comentario.user.name}</h2>
          <hr />
        </div>
        <div className="commentTxt">
          <p>{comentario.comentario}</p>
          <div
            className="calification-stars"
            id="starts-comment"
          >
            {
              <>
                {rowsCalificationFas}
                {rowsCalificationFar}
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
};
