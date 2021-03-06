import React from 'react'
import { useSelector } from 'react-redux'
import '../../styles/css/index/index.css'
import '../../styles/css/Innecesary/main.css'
import '../../styles/css/grid-card/grid-card.css'
import {Banner} from './Banner'
import { ProductMain } from './ProductMain'


export const Main = () => {
    const stateArticles = useSelector(state => state.articles)
    const search = useSelector(state => state.search)
    let listArticles = {
        articles: [...stateArticles.articles],
        bestHighers: [...stateArticles.bestHighers],
        offers: [...stateArticles.offers],
        others: [...stateArticles.others],
    }
    if (search) {
        listArticles.articles = [...listArticles.articles.filter(art => art.productName.toLowerCase().includes(search.toLowerCase()))]
        listArticles.bestHighers = [...listArticles.bestHighers.filter(art => art.productName.toLowerCase().includes(search.toLowerCase()))]
        listArticles.offers = [...listArticles.offers.filter(art => art.productName.toLowerCase().includes(search.toLowerCase()))]
        listArticles.others = [...listArticles.others.filter(art => art.productName.toLowerCase().includes(search.toLowerCase()))]
    }
    return (
        <div>
            <main className="main_main">
                <div className="container">
                    <Banner />
                    
                    <div className="contenido">
                        <div className="new-articles design lineas">
                            <div className="head-articles">
                                <span className="bold">New Articles</span>
                            </div>
                            <div className="grid-articles">
                                {
                                    listArticles.articles?.map(art => {
                                        return <ProductMain key={art.id} article={art} />
                                    })
                                }
                            </div>
                        </div>
                        <div className="best-articles">
                            <div className="head-articles">
                                <span className="bold">Best Highers</span>
                            </div>
                            <div className="grid-articles">
                                { 
                                    listArticles.bestHighers?.map(art => {
                                        return <ProductMain key={art.id} article={art} />
                                    })
                                }
                            </div>

                            <div className="head-articles">
                                <span className="bold">Offers</span>
                            </div>
                            <div className="grid-articles">
                                {
                                    listArticles.offers?.map(art => {
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
