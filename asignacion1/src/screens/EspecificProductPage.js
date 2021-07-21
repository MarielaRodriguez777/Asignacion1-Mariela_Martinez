import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { setRutas } from '../action/rutas'
import { Footer } from '../components/Landing/Footer'
import { EspecificProducts } from '../components/ProductPage/EspecificProducts'

export const EspecificProductPage = () => {

    const dispatch = useDispatch()
    let history = useHistory().location.pathname;
    useEffect(() => {
        dispatch(setRutas(history))
    }, [dispatch, history])
    
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
