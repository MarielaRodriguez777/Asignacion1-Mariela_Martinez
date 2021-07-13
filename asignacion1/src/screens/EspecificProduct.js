import React from 'react'
import { Footer } from '../components/Landing/Footer'
import { Navbar } from '../components/Landing/Navbar'
import { EspecificProducts } from '../components/ProductPage/EspecificProducts'

export const EspecificProduct = () => {
    return (
        <div>
            <Navbar />
            <EspecificProducts />
            <Footer />
        </div>
    )
}
