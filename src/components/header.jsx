import React, { Component } from 'react';
import {withAuth} from './../AuthContext';
import AppBar  from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import {Logo} from 'loft-taxi-mui-theme';
import './header.css';


class Header extends Component{
    render(){
        const unauthenticate=()=>{
            this.props.logOut();
            this.props.navigateTo('login')
        }
        return<>
            <AppBar  position='static'>
                <Paper elevation={4} color='primary'>
                    <header className='header'>
                        <Logo src='logo' className='logoHeader'/>
                        <nav className='topNav'>
                            <ul className="navList">
                                <li className="header__item">
                                    <Link href="#"
                                    color="secondary"
                                    onClick ={()=>{this.props.navigateTo("map")}}>
                                    Карта
                                    </Link>
                                </li>
                                <li className="header__item">
                                    <Link href="#"
                                    color="secondary"
                                    onClick ={()=>{this.props.navigateTo("profile")}}>
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
            

export default withAuth (Header);
     
