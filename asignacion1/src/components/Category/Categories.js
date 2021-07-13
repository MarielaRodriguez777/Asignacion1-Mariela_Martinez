import React from 'react'
import '../../styles/css/Innecesary/styles.css'
import '../../styles/css/category/category.css'

export const Categories = () => {
    return (
        <div>
            <main>
                <div className="all-category">
                    <span>
                        <h1 className="espaciado" >All categories</h1>
                    </span>
                    <div className="categorys">
                        <div className="category-item">
                            <img src={`./images/Images shopping/sombra.jpg`} alt="" />
                            <h1 className="centrado">Sombras</h1>
                        </div>
                        <div className="category-item">
                            <img src={`./images/Images shopping/labiales.jpg`} alt="" />
                            <h1 className="centrado">Labiales</h1>
                        </div>
                        <div className="category-item">
                            <img src={`./images/Images shopping/brochas.jpg`} alt="" />
                            <h1 className="centrado">Brochas</h1>
                        </div>
                        <div className="category-item">
                            <img src={`./images/Images shopping/blushes.jpg`} alt="" />
                            <h1 className="centrado">Blushes</h1>
                        </div>
                        <div className="category-item">
                            <img src={`./images/Images shopping/bases.jpg`} alt="" />
                            <h1 className="centrado">Bases</h1>
                        </div>
                        <div className="category-item">
                            <img src={`./images/Images shopping/rimel.jpg`} alt="" />
                            <h1 className="centrado">Rimels</h1>
                        </div>
                        <div className="category-item">
                            <img src={`./images/Images shopping/c48109f7a253bb781cbeee4097b14f40.jpg`} alt="" />
                            <h1 className="centrado">Pestañas</h1>
                        </div>
                        <div className="category-item">
                            <img src={`./images/Images shopping/brochas.jpg`} alt="" />
                            <h1 className="centrado">SkinCare</h1>
                        </div>
                    </div>
                </div>

            </main>
            
        </div>
    )
}
