import { types } from "../types/types";

const state = {
    name:'Mariela',
    logged: true
}


export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.signIn:
            return {
                ...action.payload,
                logged:true
            }

        case types.logOut:
            return {
                logged:false
            }
    
        default:
            return state;
    }

}