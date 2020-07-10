import React, { Component } from 'react';


class Header extends Component{
    navigateTo = (page) => {
        if (this.props.isLoggedIn){
        this.setState({ CurrentPage: page });
        } else{
          this.setState({ CurrentPage: "login" });  
        }
      };
    render(){
        return<>
            <header className='header'>
                <img src='logo' className='logo'/>
                <nav className='topNav'>
                    <ul>
                        <li>
                            <button onClick ={()=>{this.navigateTo("map")}}>
                            Карта
                            </button>
                        </li>
                        <li>
                            <button onClick ={()=>{this.navigateTo("profile")}}>
                            Профиль
                            </button>
                        </li>
                        <li>
                            <button onClick ={()=>{this.navigateTo("login")}}>
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
     
