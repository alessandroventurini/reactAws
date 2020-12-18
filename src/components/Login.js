import React, {Component} from 'react';
import UserPool from "../UserPool";
import {CognitoUser,AuthenticationDetails} from "amazon-cognito-identity-js";


class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onSubmit = event =>{
        event.preventDefault();
        const User = new CognitoUser({
            Username: this.state.email,
            Pool: UserPool
        });

        const authDetails = new AuthenticationDetails({
            Username: this.state.email,
            Password: this.state.password
        })

        User.authenticateUser(authDetails, {
            onSuccess: data => {
                console.log('onSuccess: ', data);
            },
            onFailure: err => {
                console.error('onFailure: ', err);
            },
            newPasswordRequired: data => {
                console.log('newPasswordRequired: ', data);

            }
        })

    };

    render()
    {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.email} onChange={event => this.setState({ email : event.target.value})}/>
                    <input type="password" value={this.state.password} onChange={event => this.setState({ password : event.target.value})}/>
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;
