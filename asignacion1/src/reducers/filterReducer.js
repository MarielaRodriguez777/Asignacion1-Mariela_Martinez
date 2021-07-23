import { types } from "../types/types";

const initialState = {
    categoria: "default",
    orden: "default"
};


export const filterReducer = ( state=initialState, action ) =>{
    switch (action.type) {

        case types.setFilter:
            return {
                categoria: action.payload,
                orden: state.orden
            };

        case types.setOrder:
            return {
                categoria: state.categoria,
                orden: action.payload
            };

        default:
            return state;
    }
}