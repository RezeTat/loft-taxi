import React from 'react';
import './App.css';
import {Login} from './login'
import {Registration} from './registration'
import {Profile} from './profile'
import {Map} from './map'


const PAGES = {
  login:<Login/>,
  registration:<Registration/>,
  profile:<Profile/>,
  map:<Map/>
}

class App extends React.Component {
  state = { CurrentPage: "map" };

  navigateTo = (page) => {
    this.setState({ CurrentPage: page });
  }

  render() {
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
          {PAGES[this.state.CurrentPage]}
        </section>
      </main>
      </>
  }
}

export default App;
