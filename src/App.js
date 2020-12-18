import './App.css';
import './css/Signup.css'
import React, {Component} from 'react';
import Nav from "./components/Nav";
import Main from "./components/Main";
import {Account} from "./components/Accounts";

class App extends Component{

    render()
    {
        return (
            <Account>
                <Nav />
                <Main />
            </Account>
        );
    }
}

export default App;
