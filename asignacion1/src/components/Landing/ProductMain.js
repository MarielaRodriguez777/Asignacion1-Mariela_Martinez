import React from 'react'
import { useHistory } from 'react-router-dom';

export const ProductMain = ({article}) => {
    let history = useHistory();
    const handleArticle = () => {
        history.push(`/screens/especificProduct/${article.id}`)
    }
    return (
        <>
            <div className="tamaño">
                <img src={`${article.image}`} alt="" onClick={handleArticle} />
            </div>
        </>
    )
}
