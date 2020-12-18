import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {CognitoUserPool} from 'amazon-cognito-identity-js';


const poolData = {
    UserPoolId: 'us-east-1_olFE4guEG',
    ClientId: '2d2qm5ei1259cs3s6dkclgve3q'
};

const UserPool = new CognitoUserPool(poolData);

class App extends Component{

    constructor(props) {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    onSubmit = event =>{
        event.preventDefault();
        UserPool.signUp(this.state.email,this.state.password,[],null,(err,data) =>{
            if(err) console.error(err);
            console.log(data);
        })
    };

    render()
    {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.email} onChange={event => this.setState({ email : event.target.value})}/>
                    <input type="password" value={this.state.password} onChange={event => this.setState({ password : event.target.value})}/>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}

export default App;
