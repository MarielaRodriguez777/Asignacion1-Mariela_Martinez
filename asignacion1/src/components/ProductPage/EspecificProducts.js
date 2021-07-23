import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import '../../styles/css/especific-product/especific-product.css'
import '../../styles/css/Innecesary/styles.css'
import { dom } from '@fortawesome/fontawesome-svg-core'
import { setComentario } from '../../action/comentario'
import { db } from '../../firebase/firebase-config'
import { ComentaryCommponet } from './ComentaryCommponet'

dom.watch()

export const EspecificProducts = ({article}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const keywords = article.palabrasClave.split(' ');
    const {name:userName, photo:userPhoto} = useSelector(state => state.auth)
    let comentarios = useSelector(state => state.comentarios)
    const [formState, setFormState] = useState({
        comentValue: ''
    })
    const { comentValue } = formState;
    comentarios = comentarios.filter(com => com.idArticle===article.id)

    let rowsKeywords = [];
    for (let i = 0; i < keywords.length; i++) {
        rowsKeywords.push(
            <button key={i} className="btn btn-primary">{keywords[i]}</button>
        )
    }

    let rowsCalificationFas = [];
    for (let i = 0; i < article.calificacion; i++) {
        rowsCalificationFas.push(
            <i className="fas fa-star" key={i}></i>
        )
    }

    let rowsCalificationFar = [];
    for (let i = article.calificacion; i < 5; i++) {
        rowsCalificationFar.push(
            <i className="far fa-star" key={i}></i>
        )
    }

    const handleInputChange = ({target}) =>{
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    const handleComent = async(e) => {
        e.preventDefault();
        if(!userName){
            history.push("/screens/signIn")
        }else if(formState.comentValue){
            let newComentario = {
                idArticle: article.id,
                comentario: formState.comentValue,
                calificacion: 5,
                user: {
                    name: userName,
                    photo: userPhoto
                }
            }

            const doc = await db.collection('comentarios').add(newComentario)
            newComentario = {
                id: doc.id,
                idArticle: article.id,
                comentario: formState.comentValue,
                calificacion: 5,
                user: {
                    name: userName,
                    photo: userPhoto
                }
            }

            dispatch( setComentario(newComentario) );
        }
    }

    return (
        <div>
            <main className="body">
      
                <div className="information">
                    <img className="zoom" src={article.image} alt="" />
                    <div className="description">
                        <div className="info">
                            <span className="date">{article.creationDate}</span>
                            <h1>{article.productName}</h1>
                            <p>{article.descripcionCorta}</p>
                            <p>{article.descripcionLarga}</p>
                        </div>
                        <div className="botones">
                            <span><h2><b>Tags:</b></h2></span>
                            {rowsKeywords}
                        </div>
                    </div>
                </div>

                <div className="calification">            
                    <div className="average">
                        <span>Average</span>
                        <p>2.5%</p>
                        <div className="calification-stars">
                            {
                                <>
                                    {rowsCalificationFas}
                                    {rowsCalificationFar}
                                </>
                            }
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
                <div className="commentarys">
                    {
                        comentarios.map(com => {
                            return <ComentaryCommponet key={com.id} comentario={com} />
                        })
                    }

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
                            <input type="text" placeholder="Write your comment..." id="coment" name="comentValue" value={comentValue} onChange={handleInputChange} />
                            <button className="btn btn-primary" onClick={handleComent}>Send</button>
                        </div>
                    </div>
                </div>

            </main>   
        </div>
    )
}
