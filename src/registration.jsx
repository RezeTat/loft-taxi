import React from 'react'
import './registration.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


export const Registration = (props)=>{

    const handleSubmit=e=> {
        const { navigateTo } = props;
        e.preventDefault();
        navigateTo('map');
    };
    const goToLogin=e=> {
        const {navigateTo} = props;
        e.preventDefault();
        navigateTo("login");
    };
        return <>
            <div className='registration'>
                    <div className="formBox">
                        <div className="logo">
                            <div className="logo__image"></div>
                        </div>
                        <form className='loginForm' onSubmit={handleSubmit}>
                        <h1>Регистрация</h1>
                        <Grid container justify="flex-start">
                            <Grid item>
                                <p>Уже зарегистрирован? 
                                    <Link href="#" variant="body2" onClick={goToLogin}>
                                    Войти
                                    </Link>
                                </p>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Адрес электронной почты"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="Имя"
                                autoFocus
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Фамилия"
                                name="lastName"
                                autoComplete="lname"
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                
                                required
                                fullWidth
                                name="password"
                                label="Пароль"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            </Grid>
                            
                            
                        </Grid>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Зарегистрироваться
                            </Button>
                        </form>
                    </div>
            </div>
            </>
};

