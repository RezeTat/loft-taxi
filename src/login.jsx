import React from 'react'
import {connect} from 'react-redux'
import {authenticate} from './actions'
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import './login.css'



export const Login =(props)=>{

    const [loginInfo, setLoginInfo] = React.useState({
		email:'',
        password:""
    });

    // const authenticate = (e)=>{
    //     e.preventDefault()
    //     const {email, password} = e.target;
    //     props.authenticate(email.value, password.value)
    // };

    const onChangeInput = e => {
        const input = e.target;
        setLoginInfo({ ...loginInfo, [input.name]: input.value })
    };

    const handleSubmit=e=> {
        e.preventDefault();
        props.authenticate(loginInfo.email,loginInfo.password);
    };
        return (
            <>
            <div className='login'>
                <div className='formBox'>
                    <div className="logo">
                        <div className="logo__image"></div>
                    </div>
                {
                    props.isLoggedIn ? (
                        <p>
                        Вы в системе <Link to='/Profile'>В профиль</Link>
                        </p>
                    ) : (
                        <form className="loginForm" onSubmit={handleSubmit} > 
                            <h1>Войти</h1>
                            <p>Новый пользователь? 
                            <Link href="#" to='/Registration'>
                            Зарегистрируйтесь
                            </Link>
                            </p>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Имя пользователя"
                                autoComplete="email"
                                autoFocus
                                value={loginInfo.email}
                                name="email"
                                onChange={onChangeInput}
                            />
                            <TextField                           
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Пароль"
                                type="password"
                                id="password"
                                value={loginInfo.password} 
                                onChange={onChangeInput}
                                autoComplete="current-password"
                            />
                            <div align='right'>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className='buttonSubmit'
                                >
                                    Войти
                                </Button>
                            </div>
                        </form>
                    )
                }
                </div>
                </div>
            
            </>
        );
}
    


Login.propTypes = {
    isLoggedIn: PropTypes.bool,
    logIn: PropTypes.func,
  };

export const LoginWithConnect = connect(
    (state)=> ({isLoggedIn:state.auth.isLoggedIn}),
    {authenticate}
)(Login)
