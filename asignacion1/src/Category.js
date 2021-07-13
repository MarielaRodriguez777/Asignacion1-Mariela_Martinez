import React from 'react'
import { Categories } from './components/Category/Categories'
import { Footer } from './components/Landing/Footer'
import { Navbar } from './components/Landing/Navbar'

export const Category = () => {
    return (
        <div>
            <Navbar />
            <Categories />
            <Footer />
        </div>
    )
}
