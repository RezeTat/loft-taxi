import React from 'react'

export const Registration = ()=>{
    return (
        <form>
            <label htmlFor="email">Адрес электронной почты</label>
            <input id="email" type="email" name="email" size="28"/>
            <label htmlFor="name">Имя</label>
            <input id="name" type="text" name="name" size="28"/>
            <label htmlFor="lastname">Фамилия</label>
            <input id="lastname" type="text" name="lastname" size="28"/>
            <label htmlFor="password">Пароль</label>
            <input id="password" type="text" name="password" size="28"/>
        </form>
    )
}
