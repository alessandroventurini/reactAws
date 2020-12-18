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
            <div className='container center_div'>
                <h1>LOGIN</h1>
                <form onSubmit={this.onSubmit}>
                    <div className='input-group mb-3'>
                        <span className="input-group-text">Email</span>
                        <input type="text" className='form-control' value={this.state.email} onChange={event => this.setState({ email : event.target.value})}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Password</span>
                        <input type="password" className='form-control' value={this.state.password} onChange={event => this.setState({ password : event.target.value})}/>
                    </div>
                    <button type="submit" className='btn btn-dark'>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default Login;
