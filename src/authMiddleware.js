import { logIn } from "./actions";
import {serverLogIn} from './api'
import {AUTHENTICATE} from './actions'

export const auth = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload;
    const {success,token} = await serverLogIn(email, password)
    if(success){
      store.dispatch(logIn(token))
      localStorage.setItem('user',JSON.stringify({
        token
      }))
    }
  } else {
    next(action);
  }
};
