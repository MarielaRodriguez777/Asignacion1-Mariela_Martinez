import {types} from '../types/types.js'

export const setSelectCategoria = (categoria) => ({
    type: types.selectCategoria,
    payload:categoria
})
