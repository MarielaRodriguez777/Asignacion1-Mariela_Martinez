import React from 'react'
import ReactCircleModal from 'react-circle-modal'

export const ModalView = ({article}) => {
  return (
    <ReactCircleModal
      backgroundColor="transparent"
      filter="alpha(opacity=60)"
      toogleComponent={onClick => (
        <button onClick={onClick}>
          Click here to open modal
        </button>
      )}
      // Optional fields and their default values
      offsetX={0}
      offsetY={0}
    >
      {(onClick) => (
        <div style={{ backgroundColor: '#fff', padding: '1em', width:'100px' }}>
          <p>
            <img className="imgProduct" src={article.image} alt="" />
          </p>
          <button onClick={onClick}>
            Click here to close modal
          </button>
        </div>
      )}
    </ReactCircleModal>
  )
}
