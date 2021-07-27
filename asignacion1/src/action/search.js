import {types} from '../types/types.js'

export const searchChange = (words) => ({
    type: types.searchChange,
    payload:words
})