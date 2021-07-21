import {types} from '../types/types.js'

export const setArticles = (articles) => ({
    type: types.articlesLoad,
    payload:articles
})
