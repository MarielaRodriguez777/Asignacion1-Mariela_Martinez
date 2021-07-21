import { types } from "../types/types";

const initialState = {
	categorias: [],
}



export const categoriasReducer = ( state=initialState, action ) =>{
    switch (action.type) {

        case types.categoriasLoad:
            return {categorias: action.payload};

        default:
            return state;
    }
}