import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

import '../../styles/css/paginacion/paginacion.css'
import '../../styles/css/product/product.css'
import '../../styles/css/Innecesary/styles.css'
import '../../styles/css/index/index.css'
import { ViewProducts } from './ViewProducts'


export const Product = () => {
    const state = useSelector(state => state.articles)
    const filtrarRef = useRef(true);
    const articles = [
        ...state.articles.map(art => art),
        ...state.bestHighers.map(art => art),
        ...state.offers.map(art => art)
    ]
    const handleFiltrar = () => {
        const value = filtrarRef.current.options[filtrarRef.current.options.selectedIndex].value;
        console.log(value)
    }
    
    return (
        <div>
            <main className="main_main">

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
                                        <select
                                            id="filtrar"
                                            name="filtro"
                                            onChange={handleFiltrar}
                                            ref={filtrarRef}
                                        >
                                            <option defaultValue="default">Elige una categoria</option>
                                            <option defaultValue="categoria1">categoria1</option>
                                            <option defaultValue="categoria2">categoria2</option>
                                            <option defaultValue="categoria3">categoria3</option>
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
                                        <option defaultValue="">Elige una opción</option>
                                        <option defaultValue="value1">Higher</option>
                                        <option defaultValue="value2">Less</option>
                                        <option defaultValue="value3"></option>
                                    </select>
                                </div>
                                <div className="inline"> 
                                    <span>
                                        <h4>Keyword:</h4>
                                    </span>
                                    <input type="text" className="etiqueta" name="cantidad" id="cantidad" placeholder="Etiqueta" />
                                </div>
                            </div>

                        </div>
                        <div className="product">
                            <div className="grid-product">
                                {
                                    articles.map(art => {
                                        return <ViewProducts key={art.id} article={art} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
