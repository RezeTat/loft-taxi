import React from 'react';
import './App.css';
import PropTypes from "prop-types";
import {withAuth} from './AuthContext';
import {LoginWithAuth} from './login';
import {Registration} from './registration';
import {ProfileWithAuth} from './profile';
import {Map} from './map';
// import {Profile} from './profile'
import Header from './components/header'


const PAGES = {
  login: (props) => <LoginWithAuth {...props}/>,
  registration:(props) => <Registration {...props}/>,
  profile:(props) => <ProfileWithAuth {...props}/>,
  map:(props) => <Map {...props}/>
};

class App extends React.Component {
  state = { CurrentPage: "login" };

  navigateTo = (page) => {
    // if (this.props.isLoggedIn){
    this.setState({ CurrentPage: page });
    // } else{
    //   this.setState({ CurrentPage: "login" });  
    // }
  };

  render() {
    const { CurrentPage } = this.state;
    const Page = PAGES[CurrentPage];

    return<>
      {
        this.props.isLoggedIn && <Header navigateTo={this.navigateTo}/>
      }
      <main>
        <section>
        <Page navigateTo={this.navigateTo} />
        </section>
      </main>
      </>
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default withAuth(App);
