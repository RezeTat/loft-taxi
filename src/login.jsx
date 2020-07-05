import React from 'react'

export const Login = (props)=>{
    const handleSubmit=e=> {
        const { navigateTo } = props;
        e.preventDefault();
        navigateTo('map');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Имя пользователя</label>
            <input id="username" type="username" name="username" size="28"/>
            <label htmlFor="password">Пароль</label>
            <input id="password" type="password" name="password" size="28"/>
            <button type='submit'>Войти</button>
        </form>
    );
}
