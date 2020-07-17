import {REGISTRATION} from './../actions'

const initialState = {
    email,password,name,surname
}

export default function(state=initialState, action){
    switch(action.type){
        case REGISTRATION:{
            return(state)
        }
        default:
            return state
    }
}