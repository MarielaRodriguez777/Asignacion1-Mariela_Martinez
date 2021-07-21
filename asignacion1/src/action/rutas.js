import {types} from '../types/types.js'

export const setRutas = (ruta) => ({
    type: types.updateRuta,
    payload:ruta
})
