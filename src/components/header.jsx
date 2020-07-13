import React, { Component } from 'react';


class Header extends Component{

    render(){
        return<>
            <header className='header'>
                <img src='logo' className='logoHeader'/>
                <nav className='topNav'>
                    <ul>
                        <li>
                            <button onClick ={()=>{this.props.navigateTo("map")}}>
                            Карта
                            </button>
                        </li>
                        <li>
                            <button onClick ={()=>{this.props.navigateTo("profile")}}>
                            Профиль
                            </button>
                        </li>
                        <li>
                            <button onClick ={()=>{this.props.navigateTo("login")}}>
                            Выйти
                            </button>
                        </li>

        
                    </ul> 
            </nav>
        </header>
        </>
    }
}
            

export default Header;
     
