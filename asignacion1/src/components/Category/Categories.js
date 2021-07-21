import React from 'react'
import '../../styles/css/Innecesary/styles.css'
import '../../styles/css/category/category.css'
import {useSelector} from 'react-redux'
import { CategoryComponent } from './CategoryComponent'

export const Categories = () => {
    const {categorias} = useSelector(state => state.categorias);

    console.log(categorias)
    return (
        <div>
            <main className="main_main" >
                <div className="all-category">
                    <span>
                        <h1 className="espaciado" >All categories</h1>
                    </span>
                    <div className="categorys">
                        {
                            categorias.map(cat=>{
                                return <CategoryComponent key={cat.id} category={cat} />
                            })
                        }
                    </div>
                </div>

            </main>
            
        </div>
    )
}
