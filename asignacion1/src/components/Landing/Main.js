import React from 'react'
import '../../styles/css/index/index.css'
import { Banner } from './Banner'


export const Main = () => {
    return (
        <div>
            <main className="main_main">
                <div className="container">
                    <div className="banner">
                        <Banner />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia nihil ex totam quidem quaerat error esse dolorum facere doloribus blanditiis?</p>
                    </div>
                    <div className="contenido">
                        <div className="new-articles design lineas">
                            <div className="head-articles">
                                <span>New Articles</span>
                                <a href="url">See more</a>
                            </div>
                            <div className="grid-articles">
                                <img src={`./images/assests/best1 1.png`} alt="" />
                                <img src={`./images/assests/best1 1.png`} alt="" />
                                <img src={`./images/assests/best1 1.png`} alt="" />
                                <img src={`./images/assests/best1 1.png`} alt="" />
                                <img src={`./images/assests/best1 1.png`} alt="" />
                                <img src={`./images/assests/best1 1.png`} alt="" />
                            </div>
                        </div>
                        <div className="best-articles">
                            <div className="head-articles">
                                <span>Best Highers</span>
                                <a href="url">See more</a>
                            </div>
                            <div className="grid-articles">
                                <img src={`./images/assests/best1 1.png`} alt="" />
                                <img src={`./images/assests/best1 1.png`} alt="" />
                                <img src={`./images/assests/best1 1.png`} alt="" />
                                <img src={`./images/assests/best1 1.png`} alt="" />
                            </div>

                            <div className="head-articles">
                                <span>Offers</span>
                                <a href="url">See more</a>
                            </div>
                            <div className="grid-articles">
                                <img src={`./images/assests/best1 1.png`} alt="" />
                                <img src={`./images/assests/best1 1.png`} alt="" />
                                <img src={`./images/assests/best1 1.png`} alt="" />
                                <img src={`./images/assests/best1 1.png`} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="servicios">
                        <div className="service-item">
                            <img src={`./images/assests/Ellipse 4.svg`} alt="" srcSet="" />
                            <span>Calidad y buen precio</span>
                        </div>
                        <div className="service-item">
                            <img src={`./images/assests/Ellipse 4.svg`} alt="" srcSet="" />
                            <span>Pago seguro</span>
                        </div>
                        <div className="service-item">
                            <img src={`./images/assests/Ellipse 4.svg`} alt="" srcSet="" />
                            <span>Compra con confianza</span>
                        </div>
                        <div className="service-item">
                            <img src={`./images/assests/Ellipse 4.svg`} alt="" srcSet="" />
                            <span>Servicio al cliente</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
