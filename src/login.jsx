import React from 'react'

export const Login = ()=>{
    return (
        <form>
            <label htmlFor="username">Имя пользователя</label>
            <input id="username" type="username" name="username" size="28"/>
            <label htmlFor="password">Пароль</label>
            <input id="password" type="password" name="password" size="28"/>
        </form>
    );
}
