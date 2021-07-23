import {types} from '../types/types.js'

export const setComentario = (comentario) => ({
    type: types.setComentario,
    payload: comentario
})

export const showComentarios = (comentarios) => ({
    type: types.showComentarios,
    payload: comentarios
})