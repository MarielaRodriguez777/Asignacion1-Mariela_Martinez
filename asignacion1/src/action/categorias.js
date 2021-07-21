import {types} from '../types/types.js'

export const setCategorias = (categoria) => ({
    type: types.categoriasLoad,
    payload:categoria
})
