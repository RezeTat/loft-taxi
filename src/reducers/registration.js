import {REGISTRATION} from './../actions'

const initialState = {
    // email: localStorage.getItem(email=''),
    email:'',
    password:'',
    // name: localStorage.getItem(name=''),
    // surname:localStorage.getItem(surname='')
    name:'',
    surname:''
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