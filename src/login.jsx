import React, { Component } from 'react'
import {connect} from 'react-redux'
import {authenticate} from './actions'
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import './login.css'

export class Login extends Component{

    authenticate = (event)=>{
        event.preventDefault()
        const {email, password} = event.target;
        this.props.authenticate(email.value, password.value)
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
                        Вы в системе <Link to='/Profile'>В профиль</Link>
                        </p>
                    ) : (
                        <form className="loginForm" onSubmit={this.authenticate} > 
                            <h1>Войти</h1>
                            <p>Новый пользователь? 
                            <Link href="#" to='/Regestration'>
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

export const LoginWithConnect = connect(
    (state)=> ({isLoggedIn:state.auth.isLoggedIn}),
    {authenticate}
)(Login)
