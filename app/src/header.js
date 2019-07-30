import React, {Component} from 'react';
import { Link } from "react-router-dom";
import about from './about';
import home from './home';
import signIn from './signIn';
export default class header extends Component{
    render(){
        return(
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/signIn">Sign In</Link>
                        </li>

                    </ul>
                </div>
            </Router>

        );

    }

}