import { logIn } from "./actions";
import {serverRegistration} from './api'
import {REGISTRATION} from './actions'

export const registration = (store) => (next) => async (action) => {
  if (action.type === REGISTRATION) {
    const {email,password,name,surname} = action.payload;
    const {success,token} = await serverRegistration(email,password,name,surname)
    if(success){
      store.dispatch(logIn(token));
      localStorage.setItem(JSON.stringify({
        email,
        password,
        name,
        surname
      }))
    }
  } else {
    next(action);
  }
  
};

