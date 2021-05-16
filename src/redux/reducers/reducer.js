import { INCREASE, INCREASE_BY_ENTERED_VALUE, RESET_NUMBER } from "../actionTypes/actionTypes";

export const counterReducer=(state=0,action)=>{
    switch (action.type) {
        case INCREASE:
            return state+action.payload
        
        case INCREASE_BY_ENTERED_VALUE:
            return state+action.payload
       
        case RESET_NUMBER:
            return state-action.payload
    
        default:
            return state
    }
}