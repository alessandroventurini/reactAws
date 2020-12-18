import './App.css';
import React, {Component} from 'react';
import Signup from "./components/Signup";
import Login from "./components/Login";

class App extends Component{

    render()
    {
        return (
            <div>
                <Signup />
                <Login />
            </div>
        );
    }
}

export default App;
