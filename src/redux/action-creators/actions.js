import { INCREASE, INCREASE_BY_ENTERED_VALUE, RESET_NUMBER } from "../actionTypes/actionTypes"

export const increase= ()=>{
    return {
        type:INCREASE,
        payload:1
    }
}

export const increaseByEntered= (val)=>{
    return {
        type:INCREASE_BY_ENTERED_VALUE,
        payload:val
    }
}

export const resetNumber= (val)=>{
    return {
        type:RESET_NUMBER,
        payload:val
    }
}

