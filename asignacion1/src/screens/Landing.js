import React from 'react'
import { Footer } from '../components/Landing/Footer';
import { Main } from '../components/Landing/Main';
import { Navbar } from '../components/Landing/Navbar';


export const Landing = () => {
    return (
        <div>
            <Navbar/>
            <Main/>
            <Footer/>
        </div>
    )
}
