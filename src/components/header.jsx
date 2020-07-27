import React, { Component } from 'react';
import {connect} from 'react-redux';
import AppBar  from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';
import {Logo} from 'loft-taxi-mui-theme';
import './header.css';
import {logOut} from './../actions'
import { Link } from "react-router-dom";


class Header extends Component{
    render(){
        const unauthenticate=(e)=>{
            e.preventDefault();
            this.props.logOut();
        }
        return<>
            <AppBar  position='static'>
                <Paper elevation={4} color='primary'>
                    <header className='header'>
                        <Logo src='logo' className='logoHeader'/>
                        <nav className='topNav'>
                            <ul className="navList">
                                <li className="header__item">
                                    <Link to='/map'
                                    color="secondary"
                                    >
                                    Карта
                                    </Link>
                                </li>
                                <li className="header__item">
                                    <Link to='/profile'
                                    color="secondary"
                                    >
                                    Профиль
                                    </Link>
                                </li>
                                <li className="header__item">
                                    <Link href="#"
                                    color="secondary"
                                    onClick={unauthenticate}>
                                    Выйти
                                    </Link>
                                </li>
                            </ul> 
                    </nav>
                </header>
            </Paper>
        </AppBar>
        </>
    }
}
            
export default connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn}),
    { logOut }
)(Header)