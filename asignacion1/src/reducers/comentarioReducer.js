import { types } from "../types/types";

const initialState = [];


export const comentarioReducer = ( state=initialState, action ) =>{
    switch (action.type) {

        case types.setComentario:
            return [...state, action.payload];

        case types.showComentarios:
            return action.payload;

        default:
            return state;
    }
}