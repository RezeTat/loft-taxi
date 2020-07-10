import React, { Component } from 'react'
import { withAuth } from './AuthContext';

export class Login extends Component{
    goToProfile =() => {
        this.props.navigate("profile")
    };

    authenticate = (event) =>{
        event.preventDefault()
        const {email, password} = event.target;
        this.props.logIn(email.value, password.value)
    };

    goToRegistration=()=>{
        this.props.navigate("registration")
    };

    render() {
        return (
            <>
            {
                <p>Новый пользователь? <button onClick={this.goToRegistration}>Зарегистрируйтесь</button></p>
            }
            {
                
                this.props.isLoggedIn ? (
                    <p>
                    Вы в системе <button onClick={this.goToProfile}>В профиль</button>
                    </p>
                ) : (
                    <form onSubmit={this.authenticate}>
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="email" name="email" size="28" />    
                        <label htmlFor="password">Пароль:</label>
                        <input id="password" type="password" name="password" size="28"/>
                        <button type='submit'>Войти</button>
                    </form>
                )
            }
            
            </>
        );
    }
    
}

export const HomeWithAuth = withAuth(Login)