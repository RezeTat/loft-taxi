import React from 'react';
import PropTypes from "prop-types";
import './App.css';
import {withAuth} from './AuthContext';
import {HomeWithAuth} from './login';
import {Registration} from './registration';
import {ProfileWithAuth} from './profile';
import {Map} from './map';


const PAGES = {
  login: (props) => <HomeWithAuth {...props}/>,
  registration:(props) => <Registration {...props}/>,
  profile:(props) => <ProfileWithAuth {...props}/>,
  map:(props) => <Map {...props}/>
};

class App extends React.Component {
  state = { CurrentPage: "login" };

  navigateTo = (page) => {
    if (this.props.isLoggedIn){
    this.setState({ CurrentPage: page });
    } else{
      this.setState({ CurrentPage: "login" });  
    }
  };

  render() {
    const { CurrentPage } = this.state;
    const Page = PAGES[CurrentPage];

    return<>
      <header>
        <nav>
          <ul>
            <li>
              <button onClick ={()=>{this.navigateTo("login")}}>
                login
              </button>
            </li>
            <li>
              <button onClick ={()=>{this.navigateTo("registration")}}>
                registration
              </button>
            </li>
            <li>
              <button onClick ={()=>{this.navigateTo("profile")}}>
                profile
              </button>
            </li>
            <li>
              <button onClick ={()=>{this.navigateTo("map")}}>
                map
              </button>
            </li>
          </ul> 
        </nav>
      </header>
      <main>
        <section>
        <Page navigate={this.navigateTo} />
        </section>
      </main>
      </>
  }
}

export default withAuth(App);
