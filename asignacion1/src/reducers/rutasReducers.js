import { types } from "../types/types";

const initialState = '';


export const rutasReducer = ( state=initialState, action ) =>{
    switch (action.type) {

        case types.updateRuta:
            
            return action.payload;

        default:
            return state;
    }
}