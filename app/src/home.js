import React, { Component } from 'react';
import './App.css';
import logo from './idlelogo.jpg';
import AppNavbar from './AppNavbar';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}

export default Home;