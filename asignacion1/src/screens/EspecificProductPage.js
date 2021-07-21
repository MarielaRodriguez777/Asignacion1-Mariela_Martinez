import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Footer } from '../components/Landing/Footer'
import { EspecificProducts } from '../components/ProductPage/EspecificProducts'

export const EspecificProductPage = () => {
    
    const {idProducto} = useParams() 
    
    const state = useSelector(state => state.articles)
    const articles = [
        ...state.articles.map(art => art),
        ...state.bestHighers.map(art => art),
        ...state.offers.map(art => art)
    ]
    const article = articles.find(art => art.id===idProducto)

    return (
        <div>
            <EspecificProducts article={article} />
            <Footer />
        </div>
    )
}
