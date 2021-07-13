import React from 'react'
import '../../styles/css/especific-product/especific-product.css'
import '../../styles/css/Innecesary/styles.css'
import { dom } from '@fortawesome/fontawesome-svg-core'

dom.watch()

export const EspecificProducts = () => {
    return (
        <div>
            <main className="body">
      
                <div className="information">
                    <img src={`./images/new article five.jpg`} alt="" />
                    <div className="description">
                        <div className="info">
                            <span className="date">Creation date</span>
                            <h2>Product's name</h2>
                            <p>Full description</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, maiores!</p>
                        </div>
                        <div className="botones">
                            <button className="btn btn-primary">keyword</button>
                            <button className="btn btn-primary">category</button>
                        </div>
                    </div>
                </div>

                <div className="calification">            
                    <div className="average">
                        <span>Average</span>
                        <p>2.5%</p>
                        <div className="calification-stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    </div>

                    <div className="line">
                        <div className="line-item line-item5"></div>
                        <div className="line-item line-item4"></div>
                        <div className="line-item line-item3"></div>
                        <div className="line-item line-item2"></div>
                        <div className="line-item line-item1"></div>
                    </div>

                    <div className="star">
                    
                        <div className="star-porcentage">
                            <div className="calification-stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            </div>
                            <span>80%</span>
                        </div>
                        <div className="star-porcentage">
                            <div className="calification-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                            <span>80%</span>
                        </div>
                        <div className="star-porcentage">
                            <div className="calification-stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            </div>
                            <span>80%</span>
                        </div>
                        <div className="star-porcentage">
                            <div className="calification-stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            </div>
                            <span>80%</span>
                        </div>
                        <div className="star-porcentage">
                            <div className="calification-stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            </div>
                            <span>80%</span>
                        </div>

                    </div>

                </div>
                
                <div className="commentary">
                    
                    <div className="commentary-header">
                        <div className="commentary-title">
                            <span>Add comment</span>
                        </div>
                        </div>

                        <div className="commentary-main">
                        <div className="commentary-img">
                            <img src={`./images/user.png`} alt="" />
                        </div>
                        <div className="commentary-comment">
                            <input type="text" placeholder="Write your comment..." />
                            <button className="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>

            </main>   
        </div>
    )
}
