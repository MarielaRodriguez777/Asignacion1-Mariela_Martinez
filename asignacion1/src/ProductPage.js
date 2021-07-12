import React from 'react'
import { Footer } from './components/Landing/Footer'
import { Navbar } from './components/Landing/Navbar'
import { Product } from './components/ProductPage/Product'

export const ProductPage = () => {
    return (
        <div>
            <Navbar />
            <Product />
            <Footer />
        </div>
    )
}
