import React from 'react'
import { useSelector } from 'react-redux'
import '../../styles/css/index/index.css'
import '../../styles/css/Innecesary/main.css'
import {Banner} from './Banner'
import { ProductMain } from './ProductMain'


export const Main = () => {
    const state = useSelector(state => state.articles)
    return (
        <div>
            <main className="main_main">
                <div className="container">
                    <Banner />
                    
                    <div className="contenido">
                        <div className="new-articles design lineas">
                            <div className="head-articles">
                                <span className="bold">New Articles</span>
                                <a href="url">See more</a>
                            </div>
                            <div className="grid-articles">
                                {
                                    state.articles.map(art => {
                                        return <ProductMain key={art.id} article={art} />
                                    })
                                }
                            </div>
                        </div>
                        <div className="best-articles">
                            <div className="head-articles">
                                <span className="bold">Best Highers</span>
                                <a href="url">See more</a>
                            </div>
                            <div className="grid-articles">
                                { 
                                    state.bestHighers.map(art => {
                                        return <ProductMain key={art.id} article={art} />
                                    })
                                }
                            </div>

                            <div className="head-articles">
                                <span className="bold">Offers</span>
                                <a href="url">See more</a>
                            </div>
                            <div className="grid-articles">
                                {
                                    state.offers.map(art => {
                                        return <ProductMain key={art.id} article={art} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="servicios">
                        <div className="service-item">
                            <img src={`./images/assests/Ellipse 4.svg`} alt="" srcSet="" />
                            <span>Calidad y buen precio</span>
                        </div>
                        <div className="service-item">
                            <img src={`./images/assests/Ellipse 5.svg`} alt="" srcSet="" />
                            <span>Pago seguro</span>
                        </div>
                        <div className="service-item">
                            <img src={`./images/assests/Ellipse 6.svg`} alt="" srcSet="" />
                            <span>Compra con confianza</span>
                        </div>
                        <div className="service-item">
                            <img src={`./images/assests/Ellipse 7.svg`} alt="" srcSet="" />
                            <span>Servicio al cliente</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
