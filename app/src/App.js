import React, {Component} from 'react';
import logo from './idlelogo.png';
import './App.css';
import Header from './header';
import about from './about';
import home from './home';
import signIn from "./signIn";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit the <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends Component{
  render(){
    return(
        <Router>
          <div>
            <Header className = "menu-ul">
              <Route exact path="/" component={home} />
              <Route path="/about" component={about} />
              <Route path="/signIn" component={signIn} />
            </Header>
          </div>
        </Router>
    );
  }
}

export default App;
