import React from 'react'
import ReactCircleModal from 'react-circle-modal'
import '../../styles/css/modal/modal.css'


export const ModalView = ({article}) => {
  return (
    <ReactCircleModal
      backgroundColor="none"
      filter="alpha(opacity=60)"
      toogleComponent={onClick => (
        <button onClick={onClick}>
          Haga clic aquí para ampliar la imagen
        </button>
      )}
      // Optional fields and their default values
      offsetX={0}
      offsetY={0}
    >
      {(onClick) => (
        <div className="windowView">
            <div className="boton">
              <button onClick={onClick}>
                <span>X</span>
              </button>
            </div>
            <img src={article.imageZoom} alt="" />
        </div>
      )}
    </ReactCircleModal>
  )
}
