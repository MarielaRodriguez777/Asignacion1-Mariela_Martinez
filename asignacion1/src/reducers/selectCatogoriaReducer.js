import { types } from "../types/types";

const initialState = ""



export const selectCategoriaReducer = ( state=initialState, action ) =>{
    switch (action.type) {

        case types.selectCategoria:
            return action.payload;

        default:
            return state;
    }
}