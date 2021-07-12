import React from 'react'

import '../../styles/css/paginacion/paginacion.css'
import '../../styles/css/product/product.css'
import '../../styles/css/Innecesary/styles.css'
import '../../styles/css/index/index.css'


export const Product = () => {
    return (
        <div>
            <main>

                <div className="container">
                    <div className="contenido">
                        <div className="filter">
                            <div className="grid-filter">
                                <div>
                                    <h3>Filtro:</h3><br />
                                    <div className="inline">
                                        <span>
                                            <h4>Category:</h4>
                                        </span>
                                        <select name="select">
                                            <option value="">Elige una opción</option>
                                            <option value="value1">Value 1</option>
                                            <option value="value2">Value 2</option>
                                            <option value="value3">Value 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="text">
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                </div>
                                <div className="inline">
                                    <span>
                                        <h4>Order:</h4>
                                    </span>
                                    <select name="select">
                                        <option value="">Elige una opción</option>
                                        <option value="value1">Higher</option>
                                        <option value="value2">Less</option>
                                        <option value="value3"></option>
                                    </select>
                                </div>
                                <div className="inline"> 
                                    <span>
                                        <h4>Keyword:</h4>
                                    </span>
                                    <input type="text" className="etiqueta" name="cantidad" id="cantidad" placeholder="Etiqueta" readonly="readonly" />
                                </div>
                            </div>

                        </div>
                        <div className="product">
                            <div className="grid-product">
                                <div className="tarjet">
                                    <img className="product-image" src={`./images/new article five.jpg`} alt="" />
                                    <h3>Name Product</h3>
                                    <span><h4>Lorem ipsum dolor sit amet.</h4></span>
                                    <a href="#">See more</a>
                                </div>
                                <div className="tarjet">
                                    <img className="product-image" src={`./images/new article five.jpg`} alt="" />
                                    <h3>Name Product</h3>
                                    <span><h4>Lorem ipsum dolor sit amet.</h4></span>
                                    <a href="#">See more</a>
                                </div>
                                <div className="tarjet">
                                    <img className="product-image" src={`./images/new article five.jpg`} alt="" />
                                    <h3>Name Product</h3>
                                    <span><h4>Lorem ipsum dolor sit amet.</h4></span>
                                    <a href="#">See more</a>
                                </div>
                                <div className="tarjet">
                                    <img className="product-image" src={`./images/new article five.jpg`} alt="" />
                                    <h3>Name Product</h3>
                                    <span><h4>Lorem ipsum dolor sit amet.</h4></span>
                                    <a href="#">See more</a>
                                </div>
                                <div className="tarjet">
                                    <img className="product-image" src={`./images/new article five.jpg`} alt="" />
                                    <h3>Name Product</h3>
                                    <span><h4>Lorem ipsum dolor sit amet.</h4></span>
                                    <a href="#">See more</a>
                                </div>
                                <div className="tarjet">
                                    <img className="product-image" src={`./images/new article five.jpg`} alt="" />
                                    <h3>Name Product</h3>
                                    <span><h4>Lorem ipsum dolor sit amet.</h4></span>
                                    <a href="#">See more</a>
                                </div>
                                <div className="tarjet">
                                    <img className="product-image" src={`./images/new article five.jpg`} alt="" />
                                    <h3>Name Product</h3>
                                    <span><h4>Lorem ipsum dolor sit amet.</h4></span>
                                    <a href="#">See more</a>
                                </div>
                                <div className="tarjet">
                                    <img className="product-image" src={`./images/new article five.jpg`} alt="" />
                                    <h3>Name Product</h3>
                                    <span><h4>Lorem ipsum dolor sit amet.</h4></span>
                                    <a href="#">See more</a>
                                </div>
                            </div>
                            <div>
                                <section className="paginacion">
                                    <ul>
                                        <li><a href="pagina1.html" className="active">1</a></li>
                                        <li><a href="pagina2.html">2</a></li>
                                        <li><a href="pagina3.html">3</a></li>
                                        <li><a href="pagina4.html">4</a></li>
                                        <li><a href="pagina5.html">5</a></li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
