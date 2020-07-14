import React, { Component } from 'react'
import { withAuth } from './AuthContext';
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import './login.css'

export class Login extends Component{
    goToProfile =() => {
        this.props.navigateTo("profile")
    };
    goToMap =() => {
        this.props.navigateTo("map")
    };

    authenticate = (event)=>{
        event.preventDefault()
        const {email, password} = event.target;
        this.props.logIn(email.value, password.value)
    };

    goToRegistration=()=>{
        this.props.navigateTo("registration")
    };
    render() {
        return (
            <>
            <div className='login'>
                <div className='formBox'>
                    <div className="logo">
                        <div className="logo__image"></div>
                    </div>
                {
                    this.props.isLoggedIn ? (
                        <p>
                        Вы в системе <button onClick={this.goToProfile}>В профиль</button>
                        
                        Карта <button onClick={this.goToMap}>Карта</button>
                        </p>
                    ) : (
                        <form className="loginForm" onSubmit={this.authenticate} > 
                            <h1>Войти</h1>
                            <p>Новый пользователь? 
                            <Link href="#" onClick={this.goToRegistration}>
                            Зарегистрируйтесь
                            </Link>
                            </p>
                            <TextField
                                margin="normal"
                                // required
                                fullWidth
                                id="email"
                                label="Имя пользователя"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField                           
                                margin="normal"
                                // required
                                fullWidth
                                name="password"
                                label="Пароль"
                                type="password"
                                id="password"
                                // autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className='buttonSubmit'
                            >
                                Войти
                            </Button>
                        </form>
                    )
                }
                </div>
                </div>
            
            </>
        );
    }
    
}

Login.propTypes = {
    isLoggedIn: PropTypes.bool,
    logIn: PropTypes.func,
  };

export const LoginWithAuth = withAuth(Login)
