import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../../styles/css/especific-product/especific-product.css'

export const ProductMain = ({article}) => {
    let history = useHistory();
    let comentariosState = useSelector(state => state.comentarios)
    comentariosState = comentariosState.filter(com => com.idArticle===article.id)

    const handleArticle = () => {
        history.push(`/screens/especificProduct/${article.id}`)
    }

    // Promedio de calificacion para el artiuclo
    let averageCalification = 0;
    if (comentariosState.length > 0){
        comentariosState?.map(com => {
            averageCalification = averageCalification + com.calificacion
            return com
        })
        averageCalification = Math.round(averageCalification / comentariosState.length)
    }

    let rowsCalificationFas = [];
    for (let i = 0; i < averageCalification; i++) {
        rowsCalificationFas.push(
            <i className="fas fa-star" key={i}></i>
        )
    }

    let rowsCalificationFar = [];
    for (let i = averageCalification; i < 5; i++) {
        rowsCalificationFar.push(
            <i className="far fa-star" key={i}></i>
        )
    }
    return (
        <>
            {/* <div className="tamaño">
                <img src={`${article.image}`} alt="" onClick={handleArticle} />
            </div> */}
                <div className="card"  onClick={handleArticle}>
                    <div className="card-image">
                        <img className="card-image" src={`${article.image}`} alt=""/>
                    </div>
                    <div className="card-text">
                        <span className="date">{article.creationDate}</span>
                        <h2>{article.productName}</h2>
                        <div className="calification-stars">
                            {
                                <>
                                    {rowsCalificationFas}
                                    {rowsCalificationFar}
                                </>
                            }
                        </div>
                    </div>
                </div>
        </>
    )
}
