import {PROFILE} from './../actions'

const initialState = {
    cardNumber:'',
    expiryDate:'',
    cardName:'',
    cvc:''
}

export default function(state=initialState, action){
    switch(action.type){
        case PROFILE:{
            return(state)
        }
        default:
            return state
    }
}