export const serverLogIn = async (email, password) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
  ).then(res => res.json()).then(data => data.success);
};



export const serverRegistration = async (email,password,name,surname) => {
  return fetch(
    ` https://loft-taxi.glitch.me/register?email=${email}&password=${password}&name=${name}&surname=${surname}`
  ).then(res => res.json()).then(data => data.success);
};


export const serverCard = async (cardNumber,expiryDate,cardName,cvc) => {
  return fetch(
    `  https://loft-taxi.glitch.me/card?cardNumber=${cardNumber}&expiryDate=${expiryDate}&cardName=${cardName}&cvc=${cvc}`
  ).then(res => res.json()).then(data => data.success);
};
