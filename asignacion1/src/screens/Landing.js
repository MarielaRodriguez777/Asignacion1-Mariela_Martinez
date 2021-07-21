import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setRutas } from '../action/rutas';
// import { useSelector } from 'react-redux';
import { Footer } from '../components/Landing/Footer';
import { Main } from '../components/Landing/Main';

export const Landing = () => {
    const dispatch = useDispatch()
    let history = useHistory().location.pathname;
    useEffect(() => {
        dispatch(setRutas(history))
    }, [dispatch, history])
    
    return (
        <div>
            <Main/>
            <Footer/>
        </div>
    )
}
