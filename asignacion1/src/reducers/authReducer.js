import { types } from "../types/types";


export const authReducer = ( state={}, action ) =>{
    switch (action.type) {
        case types.signIn:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
                photo: action.payload.photo
            };
        case types.logOut:
            return { };
        default:
            return state;
    }
}