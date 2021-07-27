import React from 'react'
import { useHistory } from 'react-router-dom';
import StarRating from '../starRating/StarRating';

export const ProductMain = ({article}) => {
    let history = useHistory();
    const handleArticle = () => {
        history.push(`/screens/especificProduct/${article.id}`)
    }
    return (
        <>
            {/* <div className="tamaño">
                <img src={`${article.image}`} alt="" onClick={handleArticle} />
            </div> */}
                <div className="card">
                    <div className="card-image">
                        <img className="card-image" src={`${article.image}`} alt="" onClick={handleArticle}/>
                    </div>
                    <div className="card-text">
                        <span className="date">{article.creationDate}</span>
                        <h2>{article.productName}</h2>
                        <div className="star" >
                            <StarRating />
                        </div>
                    </div>
                </div>
        </>
    )
}
