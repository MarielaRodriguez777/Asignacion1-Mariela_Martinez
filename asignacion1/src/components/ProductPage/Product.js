import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import '../../styles/css/paginacion/paginacion.css'
import '../../styles/css/product/product.css'
import '../../styles/css/Innecesary/styles.css'
import '../../styles/css/index/index.css'
import { ViewProducts } from './ViewProducts'
import { setFilter, setOrder } from '../../action/filter'
import { setSelectCategoria } from '../../action/selectCategoria'


export const Product = () => {
    const dispatch = useDispatch()
    
    const state = useSelector(state => state.articles)
    const { categorias } = useSelector(state => state.categorias)
    const filterState = useSelector(state => state.filter)
    const selectCategoriaState = useSelector(state => state.categoria)
    const search = useSelector(state => state.search)

    const filtrarRef = useRef(true);
    const ordenarRef = useRef(true);
    let articles = [
        ...state.articles.map(art => art),
        ...state.bestHighers.map(art => art),
        ...state.offers.map(art => art),
        ...state.others.map(art => art)
    ]
    if (search) {
        articles = [...articles.filter(art => art.productName.toLowerCase().includes(search.toLowerCase()))]
    }

    if (filterState.categoria !== "default"){
        articles = articles.filter(art => art.categoria === filterState.categoria);
    }
    if (filterState.orden !== "default"){
        if(filterState.orden === 'Less'){
            articles.sort( (a,b) => {
                let ordenA = a.calificacion;
                let ordenB = b.calificacion;
                if(ordenA < ordenB){
                    return -1;
                }else if (ordenA > ordenB ){
                    return 1;
                }
                return 0;

            })
        }else{
            articles.sort( (a,b) => {
                let ordenA = a.calificacion;
                let ordenB = b.calificacion;
                if(ordenA > ordenB){
                    return -1;
                }else if (ordenA < ordenB ){
                    return 1;
                }
                return 0;

            })
        }
    }

    useEffect(() => {
        if (selectCategoriaState){
            dispatch( setFilter(selectCategoriaState) );
            dispatch( setSelectCategoria("") );
        }
        filtrarRef.current.value = filterState.categoria
        ordenarRef.current.value = filterState.orden
    }, [filterState, selectCategoriaState, dispatch])

    const handleFiltrar = () => {
        const value = filtrarRef.current.options[filtrarRef.current.options.selectedIndex].value;
        
        if (value && value!=="default"){
            dispatch( setFilter(value) );
        }else{
            dispatch( setFilter("default") );
        }
    }

    const handleOrdenar = () => {
        const value = ordenarRef.current.options[ordenarRef.current.options.selectedIndex].value;
        if (value && value!=="default"){
            dispatch( setOrder(value) );
        }else{
            dispatch( setOrder("default" ) );
        }
    }

    let rowsCategorias = [];
    for (let i = 0; i < categorias.length; i++) {
        rowsCategorias.push(
            <option key={categorias[i].id} value={categorias[i].categoria}>{categorias[i].categoria}</option>
        )
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
                                            <option value="default">Elige una categoria</option>
                                            {rowsCategorias}
                                        </select>
                                    </div>
                                </div>
                                <div className="text">
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                </div>
                                <div className="inline">
                                    <span>
                                        <h4>Order by calification:</h4>
                                    </span>
                                    <select
                                        id="ordenar"
                                        name="orden"
                                        onChange={handleOrdenar}
                                        ref={ordenarRef}
                                    >
                                        <option value="default">Elige un orden</option>
                                        <option value="Higher">Higher</option>
                                        <option value="Less">Less</option>
                                    </select>
                                </div>
                                {/* <div className="inline"> 
                                    <span>
                                        <h4>Keyword:</h4>
                                    </span>
                                    <input type="text" className="etiqueta" name="cantidad" id="cantidad" placeholder="Etiqueta" />
                                </div> */}
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
