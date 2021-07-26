// import { types } from "../types/types";

import { types } from "../types/types";

const initialState = {
	articles: [],
}

export const articlesReducer = ( state=initialState, action ) =>{
    switch (action.type) {

        case types.articlesLoad:
            console.log(action.payload)
            return {
                articles: [...action.payload.filter(art=> art.catalogo==='new')],
                bestHighers:[...action.payload.filter(art=> art.catalogo==='best')],
                offers: [...action.payload.filter(art=> art.catalogo==='offer')],
                others: [...action.payload.filter(art=> art.catalogo!=='new' && art.catalogo!=='best' && art.catalogo!=='offer' )]
            };

        default:
            return state;
    }
}