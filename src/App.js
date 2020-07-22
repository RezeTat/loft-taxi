import React from 'react';
import './App.css';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {PrivateRoute} from './PrivateRoute';
import {Switch , Route} from 'react-router-dom';
import {LoginWithConnect} from './login';
import {RegistrationWithConnect} from './registration';
import {ProfileWithConnect} from './profile';
import {Map} from './map';
// import {Profile} from './profile'
import Header from './components/header'



class App extends React.Component {
  render() {
    return<>
      {
        this.props.isLoggedIn && <Header connect/>
      }
      <main>
        <section>
          <Switch>
            <Route exact path ='/' component ={LoginWithConnect}/>
            <PrivateRoute  path ='/map' component ={Map}/>
            <PrivateRoute path="/profile" component={ProfileWithConnect} />
            <Route exact path ='/registration' component ={RegistrationWithConnect}/>
          </Switch>
        </section>
      </main>
      </>
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default connect(
  state => ({isLoggedIn: state.auth.isLoggedIn})
)(App);
