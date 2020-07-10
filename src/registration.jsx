import React from 'react'
import Header from './components/header'

export const Registration = (props)=>{

    const handleSubmit=e=> {
        const { navigateTo } = props;
        e.preventDefault();
        navigateTo('map');
    };
    const goToLogin=e=> {
        const { navigateTo } = props;
        e.preventDefault();
        navigateTo('login');
    };
        return <>

            <Header navigateTo={this.props.navigateTo}/>
            <form onSubmit={handleSubmit}>
                {
                    <p>Вы уже зарегистрированы? <button onClick={this.goToLogin}>Войти</button></p>
                }
                <label htmlFor="email">Адрес электронной почты</label>
                <input id="email" type="email" name="email" size="28"/>
                <label htmlFor="name">Имя</label>
                <input id="name" type="text" name="name" size="28"/>
                <label htmlFor="lastname">Фамилия</label>
                <input id="lastname" type="text" name="lastname" size="28"/>
                <label htmlFor="password">Пароль</label>
                <input id="password" type="text" name="password" size="28"/>
                <button type='submit'>Зарегистрироваться</button>
            </form>
            </>
};

