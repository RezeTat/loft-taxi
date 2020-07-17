export const serverLogIn = async (email, password) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
  ).then(res => res.json()).then(data => data.success);
};



export const serverRegistration = async (email,password,name,surname) => {
  return fetch(
    ` https://loft-taxi.glitch.me/register?username=${email}&password=${password}&name=${name}&surname=${surname}`
  ).then(res => res.json()).then(data => data.success);
};