// import { logIn } from "./actions";
import {serverCard} from './api'
import {PROFILE} from './actions'

export const registration = (store) => (next) => async (action) => {
  if (action.type === PROFILE) {
    const {cardNumber,expiryDate,cardName,cvc} = action.payload;
    const token = getState.auth.token;
    const success = await serverCard(cardNumber,expiryDate,cardName,cvc,token)
    if(success){
      store.dispatch(action);
      localStorage.setItem(
        'cardNumber',
        'expiryDate',
        'cardName',
        'cvc'
        )
    }
  } else {
    next(action);
  }
};

