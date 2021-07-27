import { types } from "../types/types";

const initialState = '';


export const searchReducer = ( state=initialState, action ) =>{
    switch (action.type) {

        case types.searchChange:
            
            return action.payload;

        default:
            return state;
    }
}