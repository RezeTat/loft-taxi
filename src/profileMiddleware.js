import { logIn } from "./actions";
import {serverCard} from './api'
import {PROFILE} from './actions'

export const profile = (store) => (next) => async (action) => {
  if (action.type === PROFILE) {
    const {cardNumber,expiryDate,cardName,cvc} = action.payload;
    const token = store.getState().token;
    const success = await serverCard(cardNumber,expiryDate,cardName,cvc,token)
    if(success){
      store.dispatch(logIn(token));
      localStorage.setItem('card',JSON.stringify({
        cardNumber,
        expiryDate,
        cardName,
        cvc,
        token
      }))
    }
  } else {
    next(action);
  }
};

