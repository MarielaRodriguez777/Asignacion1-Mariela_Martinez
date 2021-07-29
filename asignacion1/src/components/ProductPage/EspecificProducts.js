import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import '../../styles/css/especific-product/especific-product.css'
import '../../styles/css/Innecesary/styles.css'
import { dom } from '@fortawesome/fontawesome-svg-core'
import { setComentario } from '../../action/comentario'
import { db } from '../../firebase/firebase-config'
import { ComentaryCommponet } from './ComentaryCommponet'
import { ModalView } from '../Modal/ModalView'


dom.watch()

export const EspecificProducts = ({article}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const keywords = article.palabrasClave.split(' ');



    // Cargando el state
    const {uid:userId, name:userName, photo:userPhoto} = useSelector(state => state.auth)
    let comentariosState = useSelector(state => state.comentarios)
    


    // Formulario: estado del input
    const [startCalificactionMouseMove, setStartCalificactionMouseMove] = useState(1);
    const [startCalificaction, setStartCalificaction] = useState(1);
    const [formState, setFormState] = useState({
        comentValue: ''
    })
    const { comentValue } = formState;
    comentariosState = comentariosState.filter(com => com.idArticle===article.id)

    // Handles
    const handleInputChange = ({target}) =>{
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    const handleComent = async(e) => {
        e.preventDefault();
        let comentariosPorUsuario = comentariosState.filter(com => com.user.id===userId).length
        if(!userName){
            history.push("/screens/signIn")
        }else if(formState.comentValue && comentariosPorUsuario === 0){
            let newComentario = {
                idArticle: article.id,
                comentario: formState.comentValue,
                calificacion: parseFloat(startCalificaction),
                user: {
                    id: userId,
                    name: userName,
                    photo: userPhoto
                }
            }

            const doc = await db.collection('comentarios').add(newComentario)
            newComentario = {
                id: doc.id,
                idArticle: article.id,
                comentario: formState.comentValue,
                calificacion: parseFloat(startCalificaction),
                user: {
                    id: userId,
                    name: userName,
                    photo: userPhoto
                }
            }

            dispatch( setComentario(newComentario) );
            setFormState({
                comentValue: ''
            });
            setStartCalificaction(1)
            setStartCalificactionMouseMove(1)
        }
    }
    
    const handleStartChange = ({target}) => {
        setStartCalificaction(target.id)
    }

    const handleStartMouseMove = ({target}) => {
        setStartCalificactionMouseMove(target.id)
    }

    const handleStartMouseOut = () => {
        setStartCalificactionMouseMove(startCalificaction);
    }



    // Varaibles para renderizar la informacion general
    let rowsKeywords = [];
    for (let i = 0; i < keywords.length; i++) {
        rowsKeywords.push(
            <button key={i} className="btn btn-primary">{keywords[i]}</button>
        )
    }
    
    // Promedio de calificacion para el artiuclo
    let averageCalification = 0;
    if (comentariosState.length > 0){
        comentariosState?.map(com => {
            averageCalification = averageCalification + com.calificacion
            return com
        })
        averageCalification = Math.round(averageCalification / comentariosState.length)
    }

    let rowsCalificationFas = [];
    for (let i = 0; i < averageCalification; i++) {
        rowsCalificationFas.push(
            <i className="fas fa-star" key={i}></i>
        )
    }
    let rowsCalificationFar = [];
    for (let i = averageCalification; i < 5; i++) {
        rowsCalificationFar.push(
            <i className="far fa-star" key={i}></i>
        )
    }

    //Variables para renderizar el input de comentarios
    let rowsCalificationCommentFas = [];
    for (let i = 1; i <= startCalificactionMouseMove; i++) {
        rowsCalificationCommentFas.push(
            <i onMouseEnter={handleStartMouseMove} onClick={handleStartChange} className="fas fa-star" id={i} key={i}></i>
        )
    }
    let rowsCalificationCommentFar = [];
    for (let i = parseFloat(startCalificactionMouseMove) + 1; i <= 5; i++) {
        rowsCalificationCommentFar.push(
            <i onMouseEnter={handleStartMouseMove} onClick={handleStartChange} className="far fa-star" id={i} key={i}></i>
        )
    }

    /* useEffect(() => {
        console.log('useEffect', startCalificaction)
    }, [startCalificaction]) */

    return (
        <div>
            <main className="body">
                <div className="information">
                    <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
                        <img className="imgProduct" src={article.image} alt="" />
                        <ModalView article={article} />
                    </div>
                    <div className="description">
                        <div className="info">
                            <span className="date">{article.creationDate}</span>
                            <h1>{article.productName}</h1>
                            <p>{article.descripcionCorta}</p>
                            <p>{article.descripcionLarga}</p>
                        </div>
                        <div className="average">
                            <span>Calificación</span>
                            <div className="calification-stars">
                                {
                                    <>
                                        {rowsCalificationFas}
                                        {rowsCalificationFar}
                                    </>
                                }
                            </div>
                        </div>
                        <div className="botones">
                            <span><h2><b>Tags:</b></h2></span>
                            {rowsKeywords}
                        </div>
                    </div>
                    <div className="calification">            
                    
                </div>
                </div>

                
                <div className="commentarys">
                    {
                        comentariosState.map(com => {
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
                            <img src={ userId
                                ? userPhoto
                                : `./images/user.png`
                            } alt="" />
                        </div>
                        <div className="commentary-comment">
                            <input
                                type="text"
                                placeholder="Write your comment..."
                                id="coment"
                                name="comentValue"
                                value={comentValue}
                                onChange={handleInputChange}
                                maxLength="255"
                            />
                            <div className="calification-stars" id="starts-comment" onMouseOut={handleStartMouseOut}>
                                {
                                    <>
                                        {rowsCalificationCommentFas}
                                        {rowsCalificationCommentFar}
                                    </>
                                }
                            </div>
                            <button className="btn btn-primary" onClick={handleComent}>Send</button>
                        </div>
                    </div>
                </div>

            </main>   
        </div>
    )
}
