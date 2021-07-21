import React , { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setRutas } from '../action/rutas';
import { Footer } from '../components/Landing/Footer'
import { Product } from '../components/ProductPage/Product'

export const ProductPage = () => {
    const dispatch = useDispatch()
    let history = useHistory().location.pathname;
    useEffect(() => {
        dispatch(setRutas(history))
    }, [dispatch, history])
    
    return (
        <div>
            <Product />
            <Footer />
        </div>
    )
}
