import React from 'react'
import { useHistory } from 'react-router-dom';
import '../../styles/css/especific-product/especific-product.css'

export const ProductMain = ({article}) => {
    let history = useHistory();
    const handleArticle = () => {
        history.push(`/screens/especificProduct/${article.id}`)
    }
    let rowsCalificationFas = [];
    for (let i = 0; i < article.calificacion; i++) {
        rowsCalificationFas.push(
            <i className="fas fa-star" key={i}></i>
        )
    }

    let rowsCalificationFar = [];
    for (let i = article.calificacion; i < 5; i++) {
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
