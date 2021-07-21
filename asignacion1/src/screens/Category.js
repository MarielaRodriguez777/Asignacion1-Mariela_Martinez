import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setRutas } from '../action/rutas'
import { Categories } from '../components/Category/Categories'
import { Footer } from '../components/Landing/Footer'


export const Category = () => {
    const dispatch = useDispatch()
    let history = useHistory().location.pathname;
    useEffect(() => {
        dispatch(setRutas(history))
    }, [dispatch, history])

    return (
        <div>
            <Categories />
            <Footer />
        </div>
    )
}
