import {PROFILE} from './../actions'

const initialState = {
    // cardNumber: localStorage.getItem(cardNumber=''),
    cardNumber:'',
    expiryDate:'',
    // cardName: localStorage.getItem(cardName=''),
    // cvc:localStorage.getItem(cvc='')
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