import {types} from '../types/types.js'

export const setFilter = (filter) => ({
    type: types.setFilter,
    payload: filter
})

export const setOrder = (order) => ({
    type: types.setOrder,
    payload: order
})